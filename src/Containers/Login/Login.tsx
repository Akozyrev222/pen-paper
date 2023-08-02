import React, { useCallback, useEffect, useState } from "react";
import {
    View,
    Text, TouchableOpacity, Platform
} from "react-native";
import { useTheme } from "@/Hooks";
import Google from "@/Assets/Icons/Google";
import Apple from "@/Assets/Icons/Apple";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useTranslation } from "react-i18next";
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { v4 as uuid } from 'uuid'
import { createUser } from "@/Services/modules/users/createOne";
import { useDispatch } from "react-redux";
import { navigateAndSimpleReset } from "@/Navigators/utils";
import { debounce } from 'lodash'
import { fetchUserById } from "@/Services/modules/users/fetchOne";

const Login = ({ navigation, route }) => {
    const { Common, Fonts, Gutters, Layout, Colors } = useTheme();

    const [loggedIn, setLoggedIn] = useState(false);
    const [initializing, setInitializing] = useState(true);

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const createUserFunc = (userInfo: object) => {
        dispatch(fetchUserById({ doc: userInfo.uid })).then(async (fetchRes: object) => {
            if (fetchRes.type === 'users/fetchByIdStatus/fulfilled' && fetchRes?.payload) {
                return navigateAndSimpleReset('AppStack');
            } else {
                dispatch(createUser({ doc: userInfo.uid, data: userInfo })).then((createRes: object) => {
                    console.log('createRes',createRes)
                    if (createRes.type === 'users/createUser/fulfilled') {
                        return navigateAndSimpleReset('AppStack');
                    }
                });
            }
        });

    };

    const onGoogleButtonPress = async () => {
        await GoogleSignin.hasPlayServices();
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
    };

    const onAppleButtonPress = async () => {
        // Start the sign-in request
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
        });

        // Ensure Apple returned a user identityToken
        if (!appleAuthRequestResponse.identityToken) {
            throw new Error("Apple Sign-In failed - no identify token returned");
        }

        // Create a Firebase credential from the response
        const { identityToken, nonce } = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

        // Sign the user in with the credential
        await auth().signInWithCredential(appleCredential);
    };

    const doAppleLogin = async () => {
        // Generate secure, random values for state and nonce
        const rawNonce = uuid();
        const state = uuid();

        try {
            // Initialize the module
            appleAuthAndroid.configure({
                // The Service ID you registered with Apple
                clientId: "com.PenAndPaperApp",

                // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
                // the URL you provided to Apple. It can be an empty route on your backend as it's never called.

                // [OPTIONAL]
                // Scope.ALL (DEFAULT) = 'email name'
                // Scope.Email = 'email';
                // Scope.Name = 'name';
                scope: appleAuthAndroid.Scope.ALL,

                // [OPTIONAL]
                // ResponseType.ALL (DEFAULT) = 'code id_token';
                // ResponseType.CODE = 'code';
                // ResponseType.ID_TOKEN = 'id_token';
                responseType: appleAuthAndroid.ResponseType.ALL,

                // [OPTIONAL]
                // A String value used to associate a client session with an ID token and mitigate replay attacks.
                // This value will be SHA256 hashed by the library before being sent to Apple.
                // This is required if you intend to use Firebase to sign in with this credential.
                // Supply the response.id_token and rawNonce to Firebase OAuthProvider
                nonce: rawNonce,

                // [OPTIONAL]
                // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
                state
            });

            const response = await appleAuthAndroid.signIn();
            if (response) {
                const code = response.code; // Present if selected ResponseType.ALL / ResponseType.CODE
                const id_token = response.id_token; // Present if selected ResponseType.ALL / ResponseType.ID_TOKEN
                const user = response.user; // Present when user first logs in using appleId
                const state = response.state; // A copy of the state value that was passed to the initial request.
            }

            // Sign the user in with the credential
            const appleCredential = auth.AppleAuthProvider.credential(response.id_token, rawNonce);
            await auth().signInWithCredential(appleCredential).then((e) => {
                console.log("appleCredential", e);
            });

        } catch (error) {
            console.log("error", error.message);
            if (error && error.message) {
                switch (error.message) {
                    case appleAuthAndroid.Error.NOT_CONFIGURED:
                        console.log("appleAuthAndroid not configured yet.");
                        break;
                    case appleAuthAndroid.Error.SIGNIN_FAILED:
                        console.log("Apple signin failed.");
                        break;
                    case appleAuthAndroid.Error.SIGNIN_CANCELLED:
                        console.log("User cancelled Apple signin.");
                        break;
                    default:
                        break;
                }
            }
        }
    };

    function onAuthStateChanged(user) {
        if (user) {
            createUserFunc(user);
        }
    }

    const onAuthStateChangedFunction = useCallback(
      debounce(onAuthStateChanged, 300),
      [],
    )

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChangedFunction);
        return subscriber;
    }, []);

    return (
      <View style={[Layout.fill, Layout.column, Layout.center, Common.background]}>
          <View style={{ height: 63, width: 273 }}>
              <View style={[Layout.colCenter]}>
                  <Text style={[Fonts.textBold42]}>Pen&Paper</Text>
                  <Text style={[Fonts.textRegular12, Fonts.textCenter]}>Create your wonderful characters with special
                      sheets and formulas</Text>
              </View>
          </View>
          <View style={{ height: 128, width: 218, marginTop: 90 }}>
              <View style={[Layout.colCenter]}>
                  <Text style={[Fonts.textMedium14]}>Enter via social accounts</Text>
                  <View style={[
                      Layout.rowHCenter,
                      Layout.justifyContentBetween,
                      {
                          marginTop: 24,
                          width: 161,
                          height: 80
                      }
                  ]}>
                      <TouchableOpacity
                        onPress={() => onGoogleButtonPress().then(() => console.log("Signed in with Google!"))}
                        style={[Layout.column, Layout.alignItemsCenter, { width: 67, height: 80 }]}
                      >
                          <View style={[Layout.rowCenter, {
                              width: 52,
                              height: 52,
                              backgroundColor: Colors.bottomModals,
                              borderRadius: 6
                          }]}>
                              <Google />
                          </View>
                          <Text style={[Fonts.textMedium16]}>Google</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                            if (Platform.OS === "ios") {
                                onAppleButtonPress().then(() => console.log("Apple sign-in complete!"));
                            } else {
                                console.log("android");
                                doAppleLogin().then(() => console.log("Apple sign-in complete!"));
                            }
                        }}
                        style={[Layout.column, Layout.alignItemsCenter, { width: 67, height: 80 }]}>
                          <View style={[Layout.rowCenter, {
                              width: 52,
                              height: 52,
                              backgroundColor: Colors.bottomModals,
                              borderRadius: 6
                          }]}>
                              <Apple />
                          </View>
                          <Text style={[Fonts.textMedium16]}>Apple ID</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </View>
    );
};

export default Login;

import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async ({ doc }, thunkAPI) => {
    const result = await firestore().collection("users").doc(doc).get().then(documentSnapshot => {

      if (documentSnapshot.exists) {
        return documentSnapshot.data();
      }
    });
    return result
  }
)

export type User = {
  username: string
  email: string
  lastLogin: number
  refreshToken: string
  uid: string
  id: number
  name: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
}

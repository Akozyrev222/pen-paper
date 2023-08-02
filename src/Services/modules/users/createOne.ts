import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export const createUser = createAsyncThunk(
  'users/createUser',
  async ({ doc, data }, thunkAPI) => {
    const result = await firestore()
      .collection('users')
      .doc(doc)
      .set({
        email: data.email,
        lastLogin: data.metadata.lastSignInTime,
        uid: data.uid,
      })
      .then(() => {
        console.log('User added!');
      });
    return result
  }
)

export type User = {
  username: string
  email: string
  lastLogin: number
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

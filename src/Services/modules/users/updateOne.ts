import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ doc, data }, thunkAPI) => {
    const result = await firestore()
      .collection('users')
      .doc(doc)
      .update(data)
      .then(() => {
        console.log('User updated!');
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

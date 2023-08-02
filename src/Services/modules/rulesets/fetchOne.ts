import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export const fetchRulesets = createAsyncThunk(
  'rulesets/fetchRulesets',
  async ({ doc }, thunkAPI) => {
    const result = await firestore()
      .collection('rulesets')
      .where('userId', '==', doc)
      .get()
      .then(querySnapshot => {
        const resultArray: any[] | PromiseLike<any[]> = [];
        querySnapshot.forEach(snapshot => {
          resultArray.push(snapshot.data());
        })
        return resultArray
    });
    return result
  }
)

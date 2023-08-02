import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export const createRuleset = createAsyncThunk(
  'rulesets/createRuleset',
  async ({ data }, thunkAPI) => {
    const result = await firestore()
      .collection('rulesets')
      .add(data)
      .then(() => {
        console.log('Ruleset added!');
      });
    return result
  }
)

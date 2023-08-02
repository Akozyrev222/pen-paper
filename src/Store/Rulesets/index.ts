import { createSlice } from '@reduxjs/toolkit'
import { fetchRulesets } from '@/Services/modules/rulesets/fetchOne'
import { createRuleset } from '@/Services/modules/rulesets/createOne'
import { updateRuleset } from '@/Services/modules/rulesets/updateOne'

interface RulesetsState {
  rulesets: Array<object> | undefined
  rulesetsLoading: boolean
}

const initialState = {
  rulesets: [],
  rulesetsLoading: false,
} as RulesetsState

const slice = createSlice({
  name: 'rulesets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRulesets.pending, (state) => {
      state.rulesetsLoading = true;
    })
    builder.addCase(fetchRulesets.fulfilled, (state, action) => {
      state.rulesetsLoading = false;
      state.rulesets = action.payload
    });
    builder.addCase(fetchRulesets.rejected, (state) => {
      state.rulesetsLoading = false;
    });
    builder.addCase(createRuleset.pending, (state) => {
      state.rulesetsLoading = true;
    })
    builder.addCase(createRuleset.fulfilled, (state, action) => {
      state.rulesetsLoading = false;
      // state.ruleset = {
      //   email: action?.meta?.arg?.data?.email,
      //   lastLogin: action?.meta?.arg?.data?.metadata?.lastSignInTime,
      //   uid: action?.meta?.arg?.data?.uid,
      // }
    });
    builder.addCase(createRuleset.rejected, (state) => {
      state.rulesetsLoading = false;
    })
    builder.addCase(updateRuleset.pending, (state) => {
      state.rulesetsLoading = true;
    })
    builder.addCase(updateRuleset.fulfilled, (state, action) => {
      state.rulesetsLoading = false;
      // state.ruleset.name = action?.meta?.arg?.username
    });
    builder.addCase(updateRuleset.rejected, (state) => {
      state.rulesetsLoading = false;
    });
  }
});

export default slice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from "@/Services/modules/users/fetchOne";
import { createUser } from "@/Services/modules/users/createOne";
import { updateUser } from "@/Services/modules/users/updateOne";

interface UsersState {
  user: Document | undefined
  userLoading: boolean
}

const initialState = {
  user: {},
  userLoading: false,
} as UsersState

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserById.pending, (state) => {
      state.userLoading = true;
    })
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user = action.payload
    });
    builder.addCase(fetchUserById.rejected, (state) => {
      state.userLoading = false;
    });
    builder.addCase(createUser.pending, (state) => {
      state.userLoading = true;
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user = {
        email: action?.meta?.arg?.data?.email,
        lastLogin: action?.meta?.arg?.data?.metadata?.lastSignInTime,
        uid: action?.meta?.arg?.data?.uid,
      }
    });
    builder.addCase(createUser.rejected, (state) => {
      state.userLoading = false;
    })
    builder.addCase(updateUser.pending, (state) => {
      state.userLoading = true;
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user.username = action?.meta?.arg?.username
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.userLoading = false;
    });
  }
});

export default slice.reducer

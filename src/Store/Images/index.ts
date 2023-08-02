import { createSlice } from '@reduxjs/toolkit'
import { uploadImage } from '@/Services/modules/images/uploadImage'

interface RulesetsState {
  image: string | undefined
  imagesLoading: boolean
}

const initialState = {
  image: '',
  imagesLoading: false,
} as RulesetsState

const slice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(uploadImage.pending, (state) => {
      state.imagesLoading = true;
    })
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.imagesLoading = false;
      console.log('action.payload',action.payload)
      state.image = action.payload
    });
    builder.addCase(uploadImage.rejected, (state) => {
      state.imagesLoading = false;
    });
  }
});

export default slice.reducer

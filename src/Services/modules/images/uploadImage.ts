import { createAsyncThunk } from "@reduxjs/toolkit";
import storage from "@react-native-firebase/storage";

export const uploadImage = createAsyncThunk(
  'images/uploadImage',
  async ({ imageData }, thunkAPI) => {
    const newName = imageData?.path.split('/').pop()
    const result = await storage()
      .ref(`images/${newName}`)
      .putFile(imageData.path)
      .then((snapshot) => {
        return storage()
          .ref(`images/${newName}`)
          .getDownloadURL()
          .then(url => {
            return url
          });
      });
    return result
  }
)

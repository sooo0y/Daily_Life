import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/Api";

const initialState = {
  image: "",
};

export const __imageUpload = createAsyncThunk(
  "image/__imageUpload",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/api/image", payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(data.data.data.imageUrl);
      return thunkAPI.fulfillWithValue(data.data.data.imageUrl);
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    // imageUpload: (state, action) => {
    //   console.log(action.payload)
    //   instance.post("/api/image", action.payload, {
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //   });
    // },
  },
  extraReducers: {
    [__imageUpload.pending]: (state) => {
      // state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__imageUpload.fulfilled]: (state, action) => {
      // state.isLoading = false;
      // console.log(state)  // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.image = action.payload;// Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__imageUpload.rejected]: (state, action) => {
      // state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = imageSlice.actions;
export default imageSlice;

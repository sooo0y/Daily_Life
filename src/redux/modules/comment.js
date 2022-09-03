import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 초기값
const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
      axios.post("http://localhost:3001/comments", action.payload);
    },

    updateComment: (state, action) => {
      const index = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(index, 1, action.payload);
      axios.patch(
        `http://localhost:3001/comments/${action.payload.id}`,
        action.payload
      );
    },

    deleteComment: (state, action) => {

      const index = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );

      state.comments.splice(index, 1);
      axios.delete(`http://localhost:3001/comments/${action.payload.id}`);
    },

  },

  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(state)  // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const { addComment, updateComment, deleteComment } = commentsSlice.actions;
export default commentsSlice;

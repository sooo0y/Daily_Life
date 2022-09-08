import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/Api";

// 초기값
const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    // console.log(payload)
    try {
      const data = await instance.get(`/api/comment`);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __addComment = createAsyncThunk(
//   "comment/addComment",
//   async (payload, thunkAPI) => {
//     console.log(payload)
//     try {
//       const data = await instance.post(`/api/comment`, payload);
//       console.log(data)
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __updateComment = createAsyncThunk(
//   "comment/updateComment",
//   async (payload, thunkAPI) => {
//     console.log(payload)
//     try {
//       const data = await instance.put(`/api/comment/${payload.id}`, payload);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __deleteComment = createAsyncThunk(
//   "comment/deleteComment",
//   async (payload, thunkAPI) => {
//     console.log(payload)
//     try {
//       const data = await instance.delete(`/api/comment/${payload}`);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );


export const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      instance.post("/api/comment", action.payload);
      state.comments.push(action.payload);
    },

    deleteComment: (state, action) => {
      const index = state.comments.findIndex(
        (comment) => comment.id === action.payload
      );
      instance.delete(`/api/comment/${action.payload}`);
      state.comments.splice(index, 1);
    },

    updateComment: (state, action) => {
      const index = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      instance.put(`/api/comment/${action.payload.id}`, action.payload);
      state.comments.splice(index, 1, action.payload);
    },
  },

  extraReducers: (builder) => {
    // console.log(builder);
    builder
      .addCase(__getComment.pending, (state) => {
        state.isLoading = true;
        // console.log("pending");
      })
      .addCase(__getComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
        // console.log(action.payload);
      })
      .addCase(__getComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // console.log("rejected");
      });
    // builder
    //   .addCase(__addComment.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__addComment.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.comments.push = action.payload;
    //   })
    //   .addCase(__addComment.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
    // builder
    //   .addCase(__updateComment.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__updateComment.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const index = state.comments.findIndex(
    //       (comment) => comment.id === action.payload.id
    //     );
    //     state.comments.splice(index, 1, action.payload);
    //   })
    //   .addCase(__updateComment.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
    // builder
    //   .addCase(__deleteComment.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__deleteComment.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const index = state.comments.findIndex(
    //       (comment) => comment.id === action.payload
    //     );
    //     state.comments.splice(index, 1);
    //   })
    //   .addCase(__deleteComment.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  }
});

export const { addComment, updateComment, deleteComment } =
  commentsSlice.actions;
export default commentsSlice;

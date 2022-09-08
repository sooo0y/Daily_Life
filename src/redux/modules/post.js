import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/Api";

// 초기값
const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const __getPost = createAsyncThunk(
  "posts/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/post");
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __addPost = createAsyncThunk(
//   "post/addPost",
//   async (payload, thunkAPI) => {
//     console.log(payload);
//     try {
//       const data = await instance.post("/api/post", payload);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __deletePost = createAsyncThunk(
//   "post/deletePost",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await instance.delete(`/api/post/${payload}`);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __updatePost = createAsyncThunk(
//   "post/updatePost",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await instance.put(`/api/post/${payload.id}`, payload);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      instance.post("/api/post", action.payload);
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload);
      instance.delete(`/api/post/${action.payload}`);
      state.posts.splice(index, 1);
    },

    updatePost: (state, action) => {

      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      console.log(action.payload)
      instance.put(`/api/post/${action.payload.id}`, action.payload);
      state.posts.splice(index, 1, action.payload);
    },
  },

  extraReducers: (builder) => {
    // console.log(builder);
    builder
      .addCase(__getPost.pending, (state) => {
        state.isLoading = true;
        // console.log("pending");
      })
      .addCase(__getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        // console.log(action.payload);
      })
      .addCase(__getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // console.log("rejected");
      });
    // builder
    //   .addCase(__addPost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__addPost.fulfilled, (state, action) => {
    //     // console.log(__addPost);
    //     state.isLoading = false;
    //     state.posts.push = action.payload;
    //   })
    //   .addCase(__addPost.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
    // builder
    //   .addCase(__deletePost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__deletePost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const index = state.posts.findIndex(
    //       (post) => post.id === action.payload
    //     );
    //     state.posts.splice(index, 1);
    //   })
    //   .addCase(__deletePost.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
    // builder
    //   .addCase(__updatePost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__updatePost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const index = state.posts.findIndex(
    //       (post) => post.id === action.payload.id
    //     );

    //     state.posts.splice(index, 1, action.payload);
    //   })
    //   .addCase(__updatePost.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice;

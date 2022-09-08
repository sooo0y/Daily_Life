import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/comment";
import postSlice from "../modules/post";
import userSlice from "../modules/user";
import imageSlice from "../modules/image";

const store = configureStore({
  reducer: {
		comment: commentsSlice.reducer,
    post: postSlice.reducer,
    user: userSlice.reducer,
    image: imageSlice.reducer
  },
});

export default store;
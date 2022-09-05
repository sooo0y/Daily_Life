import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/comment";
import postSlice from "../modules/post";
import user from "../modules/user";

const store = configureStore({
  reducer: {
		comment: commentsSlice.reducer,
    post: postSlice.reducer,
    user
  },
});

export default store;
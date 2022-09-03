import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/comment";
import formSlice from "../modules/form";

const store = configureStore({
  reducer: {
		comment: commentsSlice.reducer,
    form: formSlice.reducer,
  },
});

export default store;
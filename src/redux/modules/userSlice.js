import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
  };
  
  const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        createSignUp: (state, action) => {
        console.log("[투두가 만들어졌어요]", action.payload);
        state.list.push(action.payload);
      },
    },
  });
  
  export const { createSignUp } = signupSlice.actions;
  
  export default signupSlice.reducer;
  
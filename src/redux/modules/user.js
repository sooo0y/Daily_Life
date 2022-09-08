import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/Api";
import { setCookie } from "../../shared/Cookie";

// 초기값
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const __addUser = createAsyncThunk(
  "user/__addUser",
  async (user, thunkAPI) => {
    try {
      const response = await instance.post("/api/user/signup", user);
      window.alert("회원가입 되었습니다.");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __login = createAsyncThunk("user/__login", async (user, thunkAPI) => {
  try {
    const response = await instance.post("/api/user/login", user);
    console.log(response);
    if (response.data.success) {
      setCookie("isLogin", response.headers.authorization);
      setCookie("ACCESS_TOKEN", response.headers.authorization, 0.5);
      setCookie("REFRESH_TOKEN", response.headers.refreshtoken);
      localStorage.setItem("username", response.data.data.username);
    }
    return response.data;

  } catch (error) {
    window.alert(error.msg);
    return thunkAPI.rejectWithValue(error);
  }
});

export const __idCheck = createAsyncThunk(
  "user/__idCheck",
  async (payload, thunkAIP) => {
    console.log(payload);
    try {
      const response = await instance.post("/api/user/signup", payload
      , {
        headers: {
          "content-type": "application/json",
        },
      }
      );
      if ( response.data.error == null ) {
        window.alert("회원가입 되었습니다.");
      } else {
        window.alert(response.data.error.message);
      }

      return response.data;
    } catch (error) {
      window.alert(error.message);
      return thunkAIP.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // console.log(builder);
    builder
      .addCase(__addUser.pending, (state) => {
        state.isLoading = true;
        // console.log("pending");
      })
      .addCase(__addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        // console.log(action.payload);
      })
      .addCase(__addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // console.log("rejected");
      });
    builder
      .addCase(__login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__login.fulfilled, (state, action) => {
        // console.log(__addPost);
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(__idCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__idCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(__idCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

  }
});

export default userSlice;

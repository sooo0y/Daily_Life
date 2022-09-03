import axios from "axios";

export const _signUp = createAsyncThunk(
  "/api/signup",
  async ({ payload, navigate }, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://", payload);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "/api/sayings";

const initSayingsState = {
  sayingsList: [],
  status: "idle",
  error: null,
};

export const fetchSayings = createAsyncThunk(
  "sayings/fetchSayings",
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  }
);

export const addNewSaying = createAsyncThunk("/sayings/addNewSaying")

const sayingsSlice = createSlice({
  name: "sayings",
  initialState: initSayingsState,
  reducers: {},
  extraReducers: {
    [fetchSayings.pending]: (state, action) => {
      if (state.status === "idle") {
        state.status = "pending";
      }
    },
    [fetchSayings.fulfilled]: (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.sayingsList = action.payload;
      }
    },
    [fetchSayings.rejected]: (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.error = action.error;
      }
    },
  },
});

export default sayingsSlice.reducer;

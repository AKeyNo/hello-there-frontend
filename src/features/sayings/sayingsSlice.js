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

export const addNewSaying = createAsyncThunk(
  "sayings/addNewSaying",
  async (initialSaying, thunkAPI) => {
    try {
      const response = await axios.post("/api/sayings", {
        saying: initialSaying,
      });
      return response.post;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  }
);

const sayingsSlice = createSlice({
  name: "sayings",
  initialState: initSayingsState,
  reducers: {
    sayingAdded: {
      reducer(state, action) {
        state.sayings.push(action.payload);
      },
      prepare(content, user) {
        return {
          payload: { content, time: new Date().toISOString(), user },
        };
      },
    },
  },
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

import {
    createSlice,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  const baseUrl = "/api/sayings";
  
  export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (thunkAPI) => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  });
  
  const initPostsState = {
    postsList: [],
    status: "idle",
    error: null,
  };
  
  const postsSlice = createSlice({
    name: "posts",
    initialState: initPostsState,
    reducers: {},
    extraReducers: {
      [fetchPosts.pending]: (state, action) => {
        if (state.status  === "idle") {
          state.status  = "pending";
        }
      },
      [fetchPosts.fulfilled]: (state, action) => {
        if (state.status  === "pending") {
          state.status = "idle";
          state.postsList = action.payload;
        }
      },
      [fetchPosts.rejected]: (state, action) => {
        if (state.status  === "pending") {
          state.status  = "idle";
          state.error = action.error;
        }
      },
    },
  });
  
  export default postsSlice.reducer;
  
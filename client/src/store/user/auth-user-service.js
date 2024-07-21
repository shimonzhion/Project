import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios-instance";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/register", userData);
      return response.data.result;
    } catch (error) {
      // console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "user/logInUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/login", userData);
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logInUser } from "./auth-user-service";

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    image:'',
    birthdate: '',
    password: '',
    token:'',
    _id:''
  },
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
         state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.payload;
      })
      .addCase(logInUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  },
});

export const { resetError } = userSlice.actions;


export default userSlice.reducer;

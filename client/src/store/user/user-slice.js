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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
    }
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

export const { setUser, logout } = userSlice.actions;


export default userSlice.reducer;

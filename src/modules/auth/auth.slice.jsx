
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      console.log('Login Success Payload:', action.payload);
      state.user = action.payload.data.user
    },
    loginFailure: (state) => {
      state.isLoading = false
      state.user = null
    },
    logoutSuccess: (state) => {
      state.user = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logoutSuccess} = authSlice.actions
export default authSlice.reducer

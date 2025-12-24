import axios from 'axios';
import { auth, googleProvider } from '../../configs/firebase-config';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { API_BE_URL } from '../../configs/api.config';
import { loginFailure, loginStart, loginSuccess, logoutSuccess } from './auth.slice';


const api = axios.create({
  baseURL:API_BE_URL,
  timeout: 10000,
 withCredentials: true,
});




export const signInWithGoogle = () => async (dispatch) => {
  try {
    dispatch(loginStart());
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const idToken = await user.getIdToken();
    const response = await api.post('/api/v1/auth/google-login', {
      idToken
    });

    console.log('Response from backend:', response.data);

    dispatch(loginSuccess(response.data));

    console.log('Login backend thành công:', response.data);

    return response.data;
  } catch (error) {
    console.error(
      'Lỗi đăng nhập:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const logout = () => async (dispatch) =>  {
  try {
    await signOut(auth);
    await api.post('/api/v1/auth/logout');

    dispatch(logoutSuccess());

  } catch (error) {
    console.error('Lỗi đăng xuất:', error.message);
  }
};

export const observeAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

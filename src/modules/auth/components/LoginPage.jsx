
import {
  signInWithGoogle,
  logout,
} from '../auth.service';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../../components/LoadingPage';

const LoginPage = () => {
  const dispatch = useDispatch();
  const {user, isLoading} = useSelector((state) => state.auth);

  console.log('Auth State:', { user, isLoading });

  const handleLogin = async () => {
    try {
     await dispatch(signInWithGoogle());

    } catch (error) {
      alert('Đăng nhập Google thất bại');
    }
  };

  const handleLogout = async () => {
    await dispatch(logout());
  };



  if (isLoading) {
   return <LoadingPage/>;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {!user ? (
          <>
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
              Đăng nhập
            </h2>

            <button
              onClick={handleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 transition hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="h-5 w-5"
              />
              Đăng nhập với Google
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <img
                src={user.avatar?.url}
                alt="avatar"
                className="mb-4 h-20 w-20 rounded-full border"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {user.displayName}
              </h3>
              <p className="mb-6 text-sm text-gray-500">
                {user.email}
              </p>

              <button
                onClick={handleLogout}
                className="w-full rounded-xl bg-red-500 py-2 font-semibold text-white transition hover:bg-red-600"
              >
                Đăng xuất
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

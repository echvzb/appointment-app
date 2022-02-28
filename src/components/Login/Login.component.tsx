import {useLogin} from './Login.hook';

export const Login = () => {
  const {loginWithGoogleHandler} = useLogin();
  return <button onClick={loginWithGoogleHandler}>Login</button>;
};

import {useLogin} from './Login.hook';
import {Button} from 'baseui/button';
import {useStyletron} from 'baseui';

export const Login = () => {
  const {loginWithGoogleHandler} = useLogin();
  const [css] = useStyletron();
  return (
    <div
      className={css({
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Button onClick={loginWithGoogleHandler}>Login with Google</Button>
    </div>
  );
};

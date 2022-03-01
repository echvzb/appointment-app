export const useLogin = () => {
  const loginWithGoogleHandler = () =>
    window.open(
      `http://localhost:8000/api/v1/auth/google?origin=${window.location.origin}`,
      '_self',
    );
  return {
    loginWithGoogleHandler,
  };
};

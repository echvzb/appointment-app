export const useLogin = () => {
  const loginWithGoogleHandler = () =>
    window.open(
      `${process.env.API_URL}/auth/google?origin=${window.location.origin}`,
      '_self',
    );
  return {
    loginWithGoogleHandler,
  };
};

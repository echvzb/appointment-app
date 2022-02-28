export const useLogin = () => {
  const loginWithGoogleHandler = () =>
    window.open(
      `https://appointment-api-thaunze.herokuapp.com/api/v1/auth/google?origin=${window.location.origin}`,
      '_self',
    );

  return {
    loginWithGoogleHandler,
  };
};

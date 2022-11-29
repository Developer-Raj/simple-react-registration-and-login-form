const userActions = {
  loaded: "user/loaded",
  error: "user/loading/error",
  login: {
    initiate: "user/login",
    success: "user/login/success",
    error: "user/login/error",
  },
  register: {
    initiate: "user/register",
    success: "user/register/success",
    error: "user/register/error",
  },
  logout: "user/logout",
};
export default userActions;

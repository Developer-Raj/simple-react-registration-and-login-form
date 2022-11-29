import { loadUser, userLogin, userRegister } from "../../api";
import userActions from "../types/user.types";
import Alert from "izitoast";

export const $load_user =
  (page = 1) =>
  (dispatch) => {
    loadUser(page)
      .then((res) => {
        dispatch({
          type: userActions.loaded,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: userActions.error,
          payload: err,
        });
      });
  };

export const $login_user = (data) => (dispatch) => {
  dispatch({ type: userActions.login.initiate });

  userLogin(data)
    .then((res) => {
      if (res.token) {
        dispatch({ type: userActions.login.success, payload: res.token });
        Alert.success({ message: "Logged in successfully" });
      } else {
        Alert.error({ message: res.response.data.error });
        dispatch({ type: userActions.login.error });
      }
    })
    .catch((err) => {
      dispatch({ type: userActions.login.error, payload: err.message });
    });
};
export const $register_user = (data) => (dispatch) => {
  dispatch({ type: userActions.register.initiate });

  userRegister(data)
    .then((res) => {
      if (res.token) {
        dispatch({ type: userActions.register.success, payload: res.token });
        Alert.success({ message: "Registered successfully" });
      } else {
        Alert.error({ message: res.response.data.error });
        dispatch({ type: userActions.register.error });
      }
    })
    .catch((err) => {
      dispatch({ type: userActions.register.error, payload: err.message });
    });
};

export const $logout_user = () => (dispatch) => {
  Alert.success({ message: "Successfully logged out" });
  dispatch({ type: userActions.logout });
};

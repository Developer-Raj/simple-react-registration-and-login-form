import axios from "axios";

const api = (uri) => `https://reqres.in/api/${uri}`;

export const userLogin = async (data) => {
  try {
    const response = await axios.post(api("login"), data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const userRegister = async (data) => {
  try {
    const response = await axios.post(api("register"), data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const loadUser = async (page = 1) => {
  try {
    const response = await axios.get(api("users" + `?page=${page}`));
    return response.data.data;
  } catch (err) {
    return err;
  }
};

import { GET_LOGIN, REGISTER } from "../Config/constanst";
import { API } from "../Config/api";

export const register = data => {
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      return res.data;
    }
  };
};

export const login = data => {
  return {
    type: GET_LOGIN,
    payload: async () => {
      const res = await API.post("/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      return res.data;
    }
  };
};

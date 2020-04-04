import { GET_USER } from "../Config/constanst";
import { API, setAuthToken } from "../Config/api";

export const getUser = data => {
  const token = localStorage.getItem("token");
  return {
    type: GET_USER,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get("/user");
      const { data } = res.data;
      return data;
    }
  };
};

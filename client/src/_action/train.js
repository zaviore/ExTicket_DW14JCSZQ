import { GET_TRAIN } from "../Config/constanst";
import { API, setAuthToken } from "../Config/api";

export const getTrain = () => {
  console.log("get statio  idooopp");

  return {
    type: GET_TRAIN,

    payload: async () => {
      const res = await API.get("/trains");
      const { data } = res.data;

      return data;
    }
  };
};

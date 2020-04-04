import { GET_TYPE } from "../Config/constanst";
import { API } from "../Config/api";

export const getType = () => {
  console.log("get statio  idooopp");

  return {
    type: GET_TYPE,
    payload: async () => {
      const res = await API.get("/typetrains");
      const { data } = res.data;
      console.log("asdasda", data);
      return data;
    }
  };
};

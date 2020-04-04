import { GET_LIST } from "../Config/constanst";
import { API } from "../Config/api";

export const liststation = () => {
  console.log("get statio  idooopp");

  return {
    type: GET_LIST,
    payload: async () => {
      const res = await API.get("/ListStat");
      const { data } = res.data;

      return data;
    }
  };
};

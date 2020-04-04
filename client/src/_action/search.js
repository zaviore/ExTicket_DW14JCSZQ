import { GET_SEARCH } from "../Config/constanst";
import { API } from "../Config/api";

export const Searching = () => {
  console.log("get statio  idooopp");

  return {
    type: GET_SEARCH,
    payload: async () => {
      const res = await API.get("/searchStation");
      const { data } = res.data;

      return data;
    }
  };
};

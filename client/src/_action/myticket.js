import { GET_MYTICKET } from "../Config/constanst";
import { API } from "../Config/api";

export const getMyticket = () => {
  console.log("get statio  idooopp");

  return {
    type: GET_MYTICKET,
    payload: async () => {
      const res = await API.get("/mytickets");
      const { data } = res.data;

      return data;
    }
  };
};

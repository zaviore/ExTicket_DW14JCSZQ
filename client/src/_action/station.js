import { GET_TICKET } from "../Config/constanst";
import { API } from "../Config/api";

export const getStation = (from, to, date) => {
  console.log("get statio  idooopp");

  return {
    type: GET_TICKET,
    payload: async () => {
      const res = await API.get(`/stations?from=${from}&to=${to}&date=${date}`);
      const { data } = res.data;

      return data;
    }
  };
};

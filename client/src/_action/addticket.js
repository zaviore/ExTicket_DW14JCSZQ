import { ADD_TICKET } from "../Config/constanst";
import { API } from "../Config/api";

export const tambahTicket = data => {
  return {
    type: ADD_TICKET,
    payload: async () => {
      const res = await API.post("/station", data);
      return res.data;
    }
  };
};

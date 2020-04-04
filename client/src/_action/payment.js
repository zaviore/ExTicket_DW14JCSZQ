import { ADD_PAYMENT } from "../Config/constanst";
import { API } from "../Config/api";

export const addPayment = data => {
  return {
    type: ADD_PAYMENT,
    payload: async () => {
      const res = await API.post("/payment", data);
      return res.data;
    }
  };
};

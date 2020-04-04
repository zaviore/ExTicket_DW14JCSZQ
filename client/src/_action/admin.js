import { UPDATE_PAYMENT, LIST_PAYMENT } from "../Config/constanst";
import { API } from "../Config/api";

export const updatePayment = (data, id) => {
  return {
    type: UPDATE_PAYMENT,
    payload: async () => {
      const res = await API.put(`/updatepending/${id}`, data);
      return res.data;
    },
  };
};

export const listpayment = (data) => {
  return {
    type: LIST_PAYMENT,
    payload: async () => {
      const res = await API.get("/listpayment");
      const { data } = res.data;
      return data;
    },
  };
};

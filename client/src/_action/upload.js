import { UPLOAD_FOTO } from "../Config/constanst";
import { API, setAuthToken } from "../Config/api";

export const postPhoto = (formData) => {
  return {
    type: UPLOAD_FOTO,
    payload: async () => {
      const token = localStorage.getItem("token"); // panggil token ini jika menggunakan auth
      setAuthToken(token);
      const res = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { data } = res.data;
      return data;
    },
  };
};

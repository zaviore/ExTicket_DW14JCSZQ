import { UPLOAD_FOTO } from "../Config/constanst";

const initState = {
  upload: "",
  authenticated: false,
  loading: false,
  error: false,
};

const UploadPhotos = (state = initState, action) => {
  switch (action.type) {
    case `${UPLOAD_FOTO}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true,
      };

    case `${UPLOAD_FOTO}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        upload: action.payload,
      };

    case `${UPLOAD_FOTO}_REJECTED`:
      return {
        ...state,
        authenticated: false,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
export default UploadPhotos;

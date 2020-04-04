import { UPDATE_PAYMENT, LIST_PAYMENT } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const admin = (state = initState, action) => {
  switch (action.type) {
    case `${UPDATE_PAYMENT}_PENDING`:
    case `${LIST_PAYMENT}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${UPDATE_PAYMENT}_FULFILLED`:
    case `${LIST_PAYMENT}_FULFILLED`:
      console.log("fullllfileee get ticket");
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${UPDATE_PAYMENT}_REJECTED`:
    case `${LIST_PAYMENT}_REJECTED`:
      return {
        ...state,
        authenticated: false,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};
export default admin;

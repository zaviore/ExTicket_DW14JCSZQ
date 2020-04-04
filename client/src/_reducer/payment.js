import { ADD_PAYMENT } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const Paymentt = (state = initState, action) => {
  switch (action.type) {
    case `${ADD_PAYMENT}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${ADD_PAYMENT}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${ADD_PAYMENT}_REJECTED`:
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
export default Paymentt;

import { GET_LOGIN, REGISTER } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: null,
  isLogin: false
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case `${GET_LOGIN}_PENDING`:
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        loading: true
      };

    case `${GET_LOGIN}_FULFILLED`:
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        isLogin: true,
        loading: false,
        error: null
      };

    case `${GET_LOGIN}_REJECTED`:
    case `${REGISTER}_REJECTED`:
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: null
      };

    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        user: null,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default auth;

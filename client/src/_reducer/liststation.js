import { GET_LIST } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const Liststat = (state = initState, action) => {
  switch (action.type) {
    case `${GET_LIST}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${GET_LIST}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${GET_LIST}_REJECTED`:
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
export default Liststat;

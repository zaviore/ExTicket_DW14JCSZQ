import { GET_TYPE } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const getType = (state = initState, action) => {
  switch (action.type) {
    case `${GET_TYPE}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${GET_TYPE}_FULFILLED`:
      console.log("fullllfileee get ticket");
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${GET_TYPE}_REJECTED`:
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
export default getType;

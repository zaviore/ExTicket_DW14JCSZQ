import { GET_MYTICKET } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const myticket = (state = initState, action) => {
  switch (action.type) {
    case `${GET_MYTICKET}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${GET_MYTICKET}_FULFILLED`:
      console.log("fullllfileee get ticket");
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${GET_MYTICKET}_REJECTED`:
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
export default myticket;

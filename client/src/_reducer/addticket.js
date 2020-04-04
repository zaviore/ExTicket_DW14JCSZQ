import { ADD_TICKET } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const addticket = (state = initState, action) => {
  switch (action.type) {
    case `${ADD_TICKET}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${ADD_TICKET}_FULFILLED`:
      console.log("fullllfileee get ticket");
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${ADD_TICKET}_REJECTED`:
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
export default addticket;

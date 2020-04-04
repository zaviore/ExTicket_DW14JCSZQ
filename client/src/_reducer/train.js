import { GET_TRAIN } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const trains = (state = initState, action) => {
  switch (action.type) {
    case `${GET_TRAIN}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${GET_TRAIN}_FULFILLED`:
      console.log("fullllfileee get ticket");
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${GET_TRAIN}_REJECTED`:
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
export default trains;

import { GET_USER } from "../Config/constanst";

const initState = {
  data: [],
  loading: false,
  isLogin: false,
  error: null,
  user: false
};

const User = (state = initState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true,
        user: false
      };

    case `${GET_USER}_FULFILLED`:
      return {
        ...state,

        data: action.payload,
        isLogin: true,
        loading: false,
        user: true,
        error: null
      };

    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        user: false,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};
export default User;

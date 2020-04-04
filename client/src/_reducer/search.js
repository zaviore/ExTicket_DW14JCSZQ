import { GET_SEARCH } from "../Config/constanst";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: false
};

const Search = (state = initState, action) => {
  switch (action.type) {
    case `${GET_SEARCH}_PENDING`:
      return {
        ...state,
        authenticated: false,
        loading: true
      };

    case `${GET_SEARCH}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload
      };

    case `${GET_SEARCH}_REJECTED`:
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
export default Search;

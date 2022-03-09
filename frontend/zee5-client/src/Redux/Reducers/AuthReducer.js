let initialState = {
  SIGNUP: [],
  SIGNIN: [],
  MOVIES: [],
  MOVIE:[],
};

let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        SIGNUP: action.payload,
      };
    case "SIGN_IN":
      return {
        ...state,
        SIGNIN: action.payload,
      };
    case "CREATE_MOVIES":
      return {
        ...state,
        MOVIES: action.payload,
      };
      case "GET_MOVIES":
        return{
          ...state,
          MOVIE:action.payload
        }

    default:
      return state;
  }
};

export default AuthReducer;

import userActionType from "../../types/user.types";

const initialState = {
  data: [],
  isAuthenticated: false,
  rsToken: null,
  error: null,
  isLoaded: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.logout:
      return {
        ...state,
        isAuthenticated: false,
        rsToken: null,
      };
    case userActionType.register.success:
    case userActionType.login.success:
      return {
        ...state,
        isAuthenticated: true,
        rsToken: action.payload,
      };
    case userActionType.loaded:
      return {
        ...state,
        isLoaded: true,
        data: action.payload,
      };
    case userActionType.login.error:
    case userActionType.register.error:
      return {
        ...state,
        isAuthenticated: false,
        rsToken: null,
        error: action.payload,
      };
    case userActionType.error:
      return {
        ...state,
        isLoaded: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;

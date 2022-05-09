import * as actions from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case actions.LOGIN_USER: {
      if (action.payload.user && action.payload.pass) {
        return { ...state, user: action.payload.user };
      }
      return { ...state };
    }
    case actions.LOGOUT_USER: {
      return { ...state, user: undefined };
    }
  }
};

export default reducer;

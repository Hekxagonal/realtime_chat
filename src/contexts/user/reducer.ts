import * as actions from './actions';
import data from './data';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return { ...state };
    case actions.LOGIN_USER: {
      if (action.payload?.user && action.payload.pass) {
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

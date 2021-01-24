import { authType } from '../../actionsTypes';

const initialState = {
  loading: false,
  alert: null,
  check: false,
  userId: localStorage.getItem("userId") || null,
};

const {
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_LOADING,
  HIDE_LOADING,
  SIGNUP_USER,
  SIGNOUT_USER,
  FORGOT_USER,
  SIGNIN_COMPLETE
} = authType;

export const authReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: actions.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case SIGNIN_COMPLETE:
      return { ...state, check: true, userId: actions.payload };
    case SIGNUP_USER:
      return { ...state };
    case SIGNOUT_USER:
      return { ...state, check: false };
    case FORGOT_USER:
      return { ...state };
    default:
      return state;
  }
};

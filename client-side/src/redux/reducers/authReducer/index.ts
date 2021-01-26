import { authType } from '../../actionsTypes';

const initialState = {
  alertSuccess: null,
  alertError: null,
  userId: localStorage.getItem('userId') || null,
};

const { SHOW_ALERT_SUCCESS, HIDE_ALERT__SUCCESS,SHOW_ALERT_ERROR,HIDE_ALERT_ERROR, SIGNOUT_COMPLETE, SIGNIN_COMPLETE } = authType;

export const authReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case SHOW_ALERT_SUCCESS:
      return { ...state, alertSuccess: actions.payload };
    case HIDE_ALERT__SUCCESS:
      return { ...state, alertSuccess: null };
    case SHOW_ALERT_ERROR:
      return { ...state, alertError: actions.payload };
    case HIDE_ALERT_ERROR:
      return { ...state, alertError: null };
    case SIGNIN_COMPLETE:
      return { ...state, userId: actions.payload };
    case SIGNOUT_COMPLETE:
      return { ...state, userId: null };
    default:
      return state;
  }
};

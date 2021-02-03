import { authType } from '../../actionsTypes';

const initialState = {
  alertSuccess: false,
  alertError: false,
};

const { SHOW_ALERT_SUCCESS, HIDE_ALERT__SUCCESS,SHOW_ALERT_ERROR,HIDE_ALERT_ERROR} = authType;

export const authReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case SHOW_ALERT_SUCCESS:
      return { ...state, alertSuccess: true };
    case HIDE_ALERT__SUCCESS:
      return { ...state, alertSuccess: false };
    case SHOW_ALERT_ERROR:
      return { ...state, alertError: true };
    case HIDE_ALERT_ERROR:
      return { ...state, alertError: false };
    default:
      return state;
  }
};

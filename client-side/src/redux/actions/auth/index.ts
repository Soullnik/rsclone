import { authType } from '../../actionsTypes';
import { Types } from '../..//../schemas';

const {
  SHOW_ALERT_SUCCESS,
  HIDE_ALERT__SUCCESS,
  SHOW_ALERT_ERROR,
  HIDE_ALERT_ERROR,
  SIGNIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
  FORGOT_USER,
} = authType;

export const showAlertSuccess = () => {
  return {
    type: SHOW_ALERT_SUCCESS,
  };
};

export const hideAlertSuccess = () => {
  return {
    type: HIDE_ALERT__SUCCESS,
  };
};

export const showAlertError = () => {
  return {
    type: SHOW_ALERT_ERROR,
  };
};

export const hideAlertError = () => {
  return {
    type: HIDE_ALERT_ERROR,
  };
};

export const signIn = (values: Types.TypeValue) => {
  return {
    type: SIGNIN_USER,
    payload: values,
  };
};

export function signOut() {
  return {
    type: SIGNOUT_USER,
  };
}

export function signUp(values: Types.TypeValue) {
  return {
    type: SIGNUP_USER,
    payload: values,
  };
}

export function forgot(values: Types.TypeValue) {
  return {
    type: FORGOT_USER,
    payload: values,
  };
}

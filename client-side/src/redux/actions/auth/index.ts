import { authType } from '../../actionsTypes';

const {
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_LOADING,
  HIDE_LOADING,
  SIGNIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
  FORGOT_USER,
  SIGNIN_COMPLETE
} = authType;

export const showAlert = (text: string) => {
  return {
    type: SHOW_ALERT,
    payload: text,
  };
};

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  };
}

export const signIn = (values: { email: string; password: string }) => {
  return {
    type: SIGNIN_USER,
    payload: values,
  };
}

export const signInComplete = (id: string) => {
  localStorage.setItem('userId', id)
  return {
    type: SIGNIN_COMPLETE,
    payload: id
  };
}

export function signUp(data: any) {
  return {
    type: SIGNUP_USER,
    payload: data,
  };
}

export function signOut(data: any) {
  return {
    type: SIGNOUT_USER,
    payload: data,
  };
}

export function forgot(values: { email: string; password: string }) {
  return {
    type: FORGOT_USER,
    payload: values,
  };
}

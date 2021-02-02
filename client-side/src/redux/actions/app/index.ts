import { appType } from '../../actionsTypes';
import { Types } from '../..//../schemas';

const { SIGNOUT_COMPLETE, SIGNIN_COMPLETE, SEARCH_USER, LOAD_LIST } = appType;

export const signOutComplete = () => {
  return {
    type: SIGNOUT_COMPLETE,
  };
};

export const signInComplete = (id: string) => {
  return {
    type: SIGNIN_COMPLETE,
    payload: id,
  };
};

export const searchUser = (value: string) => {
  return {
    type: SEARCH_USER,
    payload: value,
  };
};

export const viewUserList = (value: any) => {
  return {
    type: LOAD_LIST,
    payload: value,
  };
};

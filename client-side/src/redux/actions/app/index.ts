import { appType } from '../../actionsTypes';

const { SIGNOUT_COMPLETE, SIGNIN_COMPLETE, SEARCH_USER, LOAD_LIST, CHANGE_USER} = appType;

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


export const changeUser = (id:string) => {
  return {
    type: CHANGE_USER,
    payload: id,
  };
}


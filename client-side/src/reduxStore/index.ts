import * as api from '../firebaseAPI';
import type { TypeUser } from '../schemas/types';

export const reducer = (state: { user: TypeUser }, action: { type: string; payload: any }) => {
  switch (action.type) {
    // case 'GET_CHATS':
    //   return {
    //     ...state,
    //     user: action.payload.chats,
    //   };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const initialstate: { user: TypeUser | null } = {
  user: null,
};

function getChats(dispatch: any) {
  return api.getChats().then((chats) =>
    dispatch({
      type: 'GET_CHATS',
      payload: chats,
    })
  );
}

function loginUser(login: string, password: string, dispatch: any) {
  return api.loginUser(login, password).then((userId) =>
    api.getUserData(userId).then((user) => {
      dispatch({
        type: 'LOGIN_USER',
        payload: user,
      })
    })
  );
}

function logOut(dispatch: any) {
  api.logOut()
  return dispatch({
    type: 'LOGOUT_USER',
    payload: null,
  })
}

export const actions = {
  getChats,
  loginUser,
  logOut
};

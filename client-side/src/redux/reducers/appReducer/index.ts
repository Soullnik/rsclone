import { appType } from '../../actionsTypes';
import { LOCATION_CHANGE } from 'connected-react-router';

const initialState = {
  userId: localStorage.getItem('userId') || '',
  currentUser: localStorage.getItem('userId') || '',
  searchList: null,
  currentPage: null,
};

const { SIGNOUT_COMPLETE, SIGNIN_COMPLETE, LOAD_LIST } = appType;

export const appReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case SIGNIN_COMPLETE:
      return { ...state, userId: actions.payload };
    case SIGNOUT_COMPLETE:
      return { ...state, userId: '' };
    case LOAD_LIST:
      return { ...state, searchList: actions.payload };
    case LOCATION_CHANGE:
      const regexpPagePath = /\/content\/profile\//;
      if (regexpPagePath.test(actions.payload.location.pathname)) {
        return {
          ...state,
          currentUser: actions.payload.location.pathname.replace(regexpPagePath, ''),
          currentPage: actions.payload.location.pathname.replace(/\/content\/profile\//, '')
        };
      }
      return state
    default:
      return state;
  }
};

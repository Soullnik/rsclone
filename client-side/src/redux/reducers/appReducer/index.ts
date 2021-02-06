import { appType } from '../../actionsTypes';
import { LOCATION_CHANGE } from 'connected-react-router';

const initialState = {
  userId: localStorage.getItem('userId') || '',
  currentUser: localStorage.getItem('userId') || '',
  keySide: '',
  searchList: null,
};

const { SIGNOUT_COMPLETE, SIGNIN_COMPLETE, LOAD_LIST } = appType;

export const appReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case 'CHANGE_SIDE': 
      return {...state, keySide: actions.payload}
    case SIGNIN_COMPLETE:
      return { ...state, userId: actions.payload };
    case SIGNOUT_COMPLETE:
      return { ...state, userId: '' };
    case LOAD_LIST:
      return { ...state, searchList: actions.payload };
    case LOCATION_CHANGE:
      const regexp = /\/content\/profile\//;
      if (regexp.test(actions.payload.location.pathname)) {
        return {
          ...state,
          currentUser: actions.payload.location.pathname.replace(/\/content\/profile\//, ''),
        };
      }
      return state
    default:
      return state;
  }
};

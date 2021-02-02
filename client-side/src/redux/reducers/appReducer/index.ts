import { appType } from '../../actionsTypes';

const initialState = {
  userId: localStorage.getItem('userId') || '',
  searchList: [],
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
    default:
      return state;
  }
};

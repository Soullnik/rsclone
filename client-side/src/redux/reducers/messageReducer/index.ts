import { messangerType } from '../../actionsTypes';

const initialState = {
  loading: null,
  chats: [],
};

const { LOAD_CHATS_DATA, SET_CHATS_DATA } = messangerType;

export const messangerReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case LOAD_CHATS_DATA:
      return {
        ...state,
        loading: actions.payload,
      };
    case SET_CHATS_DATA:
      return {
        ...state,
        chats: actions.payload
      }
    default:
      return state;
  }
};

import { messangerType } from '../../actionsTypes';
import { LOCATION_CHANGE } from 'connected-react-router';

const initialState = {
  loading: true,
  chats: [],
};

const { LOAD_CHATS_DATA } = messangerType;

export const messangerReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case LOAD_CHATS_DATA:
      return {
        ...state,
        loading: actions.payload,
      };
    default:
      return state;
  }
};

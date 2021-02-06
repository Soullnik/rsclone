import { messangerType } from '../../actionsTypes';

const {
  REQUEST_CHATS_DATA,
} = messangerType;

export const requestChatData = (payload: any) => {
  return {
    type: REQUEST_CHATS_DATA,
    payload: payload,
  };
};
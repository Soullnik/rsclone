import { messangerType } from '../../actionsTypes';

const {
  REQUEST_CHATS_DATA,
  SET_CHATS_DATA,
  LOAD_CHATS_DATA,
  OPEN_CHAT_WITH_USER
} = messangerType;

export const requestChatsData = (payload: any) => {
  return {
    type: REQUEST_CHATS_DATA,
    payload: payload,
  };
};

export const setChatsData = (payload: any) => {
  return {
    type: SET_CHATS_DATA,
    payload: payload,
  };
};

export const loadChatsDataIndicator = (payload: boolean) => {
  return {
    type: LOAD_CHATS_DATA,
    payload: payload,
  };
}

export function sendMessage(payload: any) {
  return {
    type: OPEN_CHAT_WITH_USER,
    payload: payload,
  };
}

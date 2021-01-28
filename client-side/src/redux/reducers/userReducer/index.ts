import { userType } from '../../actionsTypes';

const initialState = {
  profile: {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    city: null,
    about: null,
    avatar: null
  },
  openChats: null,
  closeChats: null,
  audio: [],
  images: [],
};

const {
  GET_CLOSE_CHATS_DATA,
  GET_OPEN_CHATS_DATA,
  GET_PROFILE_DATA,
  GET_AUDIO_DATA,
  GET_IMAGE_DATA,
} = userType;

export const userReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
        profile: actions.payload.profile,
      };
    case GET_CLOSE_CHATS_DATA:
      return { ...state, closeChats: actions.payload };
    case GET_OPEN_CHATS_DATA:
      return { ...state, openChats: actions.payload };
    case GET_AUDIO_DATA:
      return { ...state, audio: actions.payload };
    case GET_IMAGE_DATA:
      return { ...state, images: actions.payload };
    default:
      return state;
  }
};

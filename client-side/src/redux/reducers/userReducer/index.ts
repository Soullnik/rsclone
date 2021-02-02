import { userType, appType } from '../../actionsTypes';

const initialState = {
  editable: false,
  loading: true,
  ImageLoading: false,
  choseUser: null,
  friends: [],
  posts: [],
  profile: {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    city: '',
    about: '',
    avatar: '',
  },
  openChats: null,
  closeChats: null,
  audio: [],
  images: [],
};

const { SIGNOUT_COMPLETE } = appType;

const {
  GET_CLOSE_CHATS_DATA,
  GET_OPEN_CHATS_DATA,
  GET_PROFILE_DATA,
  GET_AUDIO_DATA,
  GET_IMAGE_DATA,
  LOAD_USER_DATA,
  EDITABLE_USER_DATA,
  GET_FRIENDS_DATA
} = userType;

export const userReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case LOAD_USER_DATA:
      return {
        ...state,
        loading: false,
      };
    case GET_PROFILE_DATA:
      return {
        ...state,
        profile: actions.payload.profile,
      };
    case EDITABLE_USER_DATA:
      return {
        ...state,
        editable: true,
      };
    case GET_CLOSE_CHATS_DATA:
      return { ...state, closeChats: actions.payload };
    case GET_OPEN_CHATS_DATA:
      return { ...state, openChats: actions.payload };
    case GET_FRIENDS_DATA:
      return { ...state, friends: actions.payload };
    case GET_OPEN_CHATS_DATA:
      return { ...state, openChats: actions.payload };
    case GET_AUDIO_DATA:
      return { ...state, audio: actions.payload };
    case GET_IMAGE_DATA:
      return { ...state, images: actions.payload };
    case SIGNOUT_COMPLETE:
      return { ...initialState };
    default:
      return state;
  }
};

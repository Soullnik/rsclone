import { userType, appType } from '../../actionsTypes';
import { CHANGE_USER } from '../../actionsTypes/app';

const initialState = {
  editable: false,
  loading: true,
  ImageLoading: false,
  currentFriends: null,
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
  UPDATE_FRIENDS,
  LOAD_FRIENDS,
  LOAD_POST,
} = userType;

export const userReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case LOAD_USER_DATA:
      return {
        ...state,
        loading: actions.payload,
      };
    case LOAD_FRIENDS:
      return { ...state, friends: actions.payload };
    case LOAD_POST:
      return { ...state, posts: actions.payload };
    case GET_PROFILE_DATA:
      return {
        ...state,
        profile: actions.payload.profile,
      };
    case EDITABLE_USER_DATA:
      return {
        ...state,
        editable: actions.payload,
      };
    case GET_CLOSE_CHATS_DATA:
      return { ...state, closeChats: actions.payload };
    case GET_OPEN_CHATS_DATA:
      return { ...state, openChats: actions.payload };
    case UPDATE_FRIENDS:
      return { ...state, currentFriends: actions.payload };
    case GET_OPEN_CHATS_DATA:
      return { ...state, openChats: actions.payload };
    case GET_AUDIO_DATA:
      return { ...state, audio: actions.payload };
    case GET_IMAGE_DATA:
      return { ...state, images: actions.payload };
    case CHANGE_USER:
      return { ...state, loading: true };
    case SIGNOUT_COMPLETE:
      return { ...initialState };
    default:
      return state;
  }
};

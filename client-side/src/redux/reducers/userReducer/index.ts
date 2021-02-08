import { userType, appType } from '../../actionsTypes';

const initialState = {
  editable: false,
  loading: true,
  profile: {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    city: '',
    about: '',
    avatar: '',
  },
  friends: [],
  posts: [],
  images: [],
};

const { SIGNOUT_COMPLETE } = appType;

const {
  SET_FRIENDS_DATA,
  SET_IMAGE_DATA,
  SET_POST_DATA,
  SET_USER_DATA,
  SET_INFO_DATA,
  LOAD_USER_DATA,
  EDITABLE_USER_DATA,
} = userType;

export const userReducer = (state = initialState, actions: { type: string; payload: any }) => {
  switch (actions.type) {
    case LOAD_USER_DATA:
      return {
        ...state,
        loading: actions.payload,
      };
    case EDITABLE_USER_DATA:
      return {
        ...state,
        editable: actions.payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        profile: actions.payload.profile,
        posts: actions.payload.posts,
      };
    case SET_POST_DATA:
      return { ...state, posts: [...state.posts, ...actions.payload] };
    case SET_IMAGE_DATA:
      return { ...state, images: actions.payload };
    case SET_INFO_DATA:
      return {
        ...state,
        profile: {
          ...state.profile,
          [actions.payload.type]: actions.payload.value,
        },
      };
    case SET_FRIENDS_DATA:
      return { ...state, friends: actions.payload };
    case SIGNOUT_COMPLETE:
      return { ...initialState };
    default:
      return state;
  }
};

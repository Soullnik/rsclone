import { userType } from '../../actionsTypes';
import { Types } from '../../../schemas';

const {
  REQUEST_USER_DATA,
  SET_FRIENDS_DATA,
  SET_IMAGE_DATA,
  SET_POST_DATA,
  SET_USER_DATA,
  SET_INFO_DATA,
  LOAD_USER_DATA,
  UPLOAD_USER_DATA,
  EDITABLE_USER_DATA,
  DELETE_USER_DATA,
  CHOISE_USER_AVATAR,
  CHANGE_USER_PROFILE_INFO,
  ADD_TO_FRIENDS,
  OPEN_CHAT_WITH_USER,
  ADD_POST,
} = userType;

export function loadUserDataIndicator(value: boolean) {
  return {
    type: LOAD_USER_DATA,
    payload: value,
  };
}

//REQUESTS

export const requestUserData = (data: any) => {
  return {
    type: REQUEST_USER_DATA,
    payload: data,
  };
};

//REQUESTS

//SET_DATA

export function setUserData(data: any) {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
}

export function setImageData(data: Array<string>) {
  return {
    type: SET_IMAGE_DATA,
    payload: data,
  };
}

export const setPostsData = (payload: any) => {
  return {
    type: SET_POST_DATA,
    payload: payload,
  };
};

export function setFriendsData(payload: any) {
  return {
    type: SET_FRIENDS_DATA,
    payload: payload,
  };
}

export function setInfoData(payload: any) {
  return {
    type: SET_INFO_DATA,
    payload: payload,
  };
}

//SET_DATA

//CHANGER_DATA

export function changeEditable(value: boolean) {
  return {
    type: EDITABLE_USER_DATA,
    payload: value,
  };
}

export const changeUserProfileInfo = (payload: any) => {
  return {
    type: CHANGE_USER_PROFILE_INFO,
    payload: payload,
  };
};

//CHANGER_DATA

export function uploadUserData(payload: any) {
  return {
    type: UPLOAD_USER_DATA,
    payload: payload,
  };
}

export function deleteUserData(payload: any) {
  return {
    type: DELETE_USER_DATA,
    payload: payload,
  };
}

export const postUserAvatar = (payload: any) => {
  return {
    type: CHOISE_USER_AVATAR,
    payload: payload,
  };
};

export function sendMessage(payload: any) {
  return {
    type: OPEN_CHAT_WITH_USER,
    payload: payload,
  };
}

export function addFriend(payload: any) {
  return {
    type: ADD_TO_FRIENDS,
    payload: payload,
  };
}

export const sendPost = (payload: any) => {
  return {
    type: ADD_POST,
    payload: payload,
  };
};

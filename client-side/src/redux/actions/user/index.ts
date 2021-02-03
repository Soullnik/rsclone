import { userType } from '../../actionsTypes';
import { Types } from '../../../schemas';

const {
  GET_CLOSE_CHATS_DATA,
  GET_OPEN_CHATS_DATA,
  GET_AUDIO_DATA,
  REQUEST_USER_DATA,
  GET_IMAGE_DATA,
  GET_PROFILE_DATA,
  LOAD_USER_DATA,
  UPLOAD_USER_DATA,
  EDITABLE_USER_DATA,
  DELETE_USER_DATA,
  CHOISE_USER_AVATAR,
  CHANGE_USER_PROFILE,
  ADD_TO_FRIENDS,
  UPDATE_FRIENDS,
  OPEN_CHAT_WITH_USER,
  LOAD_FRIENDS
} = userType;

export function getProfileData(data: Types.TypeUser) {
  return {
    type: GET_PROFILE_DATA,
    payload: data,
  };
}

export function editableTurnOn(value: boolean) {
  return {
    type: EDITABLE_USER_DATA,
    payload: value,
  };
}

export function loadUserData(value: boolean) {
  return {
    type: LOAD_USER_DATA,
    payload: value,
  };
}

export function getAudioData(data: Array<string>) {
  return {
    type: GET_AUDIO_DATA,
    payload: data,
  };
}

export function getImageData(data: Array<string>) {
  return {
    type: GET_IMAGE_DATA,
    payload: data,
  };
}

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

export const signInComplete = () => {
  return {
    type: GET_CLOSE_CHATS_DATA,
  };
};

export const signOutComplete = () => {
  return {
    type: GET_OPEN_CHATS_DATA,
  };
};

export const requestUserData = (data: any) => {
  return {
    type: REQUEST_USER_DATA,
    payload: data,
  };
};

export const openOtherProfile = (id: any) => {
  return {
    type: REQUEST_USER_DATA,
    payload: id,
  };
};

export const postUserAvatar = (payload: any) => {
  return {
    type: CHOISE_USER_AVATAR,
    payload: payload,
  };
};

export const changeUserProfile = (payload: any) => {
  return {
    type: CHANGE_USER_PROFILE,
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

export function updateFriendList(payload: any) {
  return {
    type: UPDATE_FRIENDS,
    payload: payload,
  };
}

export const loadFriendsInit = (data: any) => {
  return {
    type: LOAD_FRIENDS,
    payload: data,
  };
}

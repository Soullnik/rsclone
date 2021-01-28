import { userType } from '../../actionsTypes';
import { Types } from '../../../schemas';

const {
  GET_CLOSE_CHATS_DATA,
  GET_OPEN_CHATS_DATA,
  GET_AUDIO_DATA,
  REQUEST_USER_DATA,
  GET_IMAGE_DATA,
  GET_PROFILE_DATA,
} = userType;

export function getProfileData(data: Types.TypeUser) {
  return {
    type: GET_PROFILE_DATA,
    payload: data,
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

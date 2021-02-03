import { takeEvery, put, call } from 'redux-saga/effects';
import {
  fetchUserData,
  fetchStorageData,
  uploadStorageData,
  fetchFriendsData,
  searchPeople,
  deleteStorageData,
  postAvatarUrl,
  postProfilerData,
  postFriendData,
  
} from '../../../api/user';
import { userActions } from '../../actions';
import { viewUserList } from '../../actions/app';
import { userType, appType } from '../../actionsTypes';

const {
  REQUEST_USER_DATA,
  UPLOAD_USER_DATA,
  DELETE_USER_DATA,
  CHOISE_USER_AVATAR,
  CHANGE_USER_PROFILE,
  OPEN_CHAT_WITH_USER,
  ADD_TO_FRIENDS,
} = userType;
const { SEARCH_USER } = appType;

const { getProfileData, getAudioData, getImageData, loadUserData, editableTurnOn, updateFriendList,loadFriendsInit } = userActions;

function* warkerUserData({ payload }: any) {
  try {
    yield put(loadUserData(true));
    const profile = yield call(fetchUserData, payload.currentid);
    const friends = yield call(fetchFriendsData, payload.id);
    const currentfriends = yield call(fetchFriendsData, payload.currentid);
    const images = yield call(fetchStorageData, payload.currentid, 'images');
    const audio = yield call(fetchStorageData, payload.currentid, 'musics');
    localStorage.userId === payload.currentid
      ? yield put(editableTurnOn(true))
      : yield put(editableTurnOn(false));
    yield put(getProfileData(profile));
    yield put(loadFriendsInit(friends))
    yield put(updateFriendList(currentfriends))
    yield put(getAudioData(audio));
    yield put(getImageData(images));
    yield put(loadUserData(false));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserDataUpload({ payload }: any) {
  try {
    yield call(uploadStorageData, payload.file, payload.id, 'images');
    const images = yield call(fetchStorageData, payload.id, 'images');
    yield put(getImageData(images));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserDataDelete({ payload }: any) {
  try {
    yield call(deleteStorageData, payload.name, payload.id, 'images');
    const images = yield call(fetchStorageData, payload.id, 'images');
    yield put(getImageData(images));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerSearchUser({ payload }: any) {
  try {
    const userList = yield call(searchPeople, payload);
    yield put(viewUserList(userList));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserAvatar({ payload }: any) {
  try {
    yield call(postAvatarUrl, payload.src, payload.id);
    const profile = yield call(fetchUserData, payload.id);
    yield put(getProfileData(profile));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserProfileChanged({ payload }: any) {
  try {
    yield call(postProfilerData, payload.value, payload.type, payload.userId);
    const profile = yield call(fetchUserData, payload.userId);
    yield put(getProfileData(profile));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerAddFriends({ payload }: any) {
  try {
    yield call(postFriendData, payload.currnetId, payload.userId);
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerOpenChat({ payload }: any) {
  try {
    yield call(postProfilerData, payload.value, payload.type, payload.userId);
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchUser() {
  yield takeEvery(REQUEST_USER_DATA, warkerUserData);
  yield takeEvery(UPLOAD_USER_DATA, warkerUserDataUpload);
  yield takeEvery(DELETE_USER_DATA, warkerUserDataDelete);
  yield takeEvery(SEARCH_USER, warkerSearchUser);
  yield takeEvery(CHOISE_USER_AVATAR, warkerUserAvatar);
  yield takeEvery(CHANGE_USER_PROFILE, warkerUserProfileChanged);
  yield takeEvery(ADD_TO_FRIENDS, warkerAddFriends);
  yield takeEvery(OPEN_CHAT_WITH_USER, warkerOpenChat);
}

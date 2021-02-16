import { push } from 'connected-react-router';
import { takeEvery, put, call } from 'redux-saga/effects';
import { userAPI } from '../../../api';
import { userActions } from '../../actions';
import { viewUserList } from '../../actions/app';
import { userType, appType } from '../../actionsTypes';

const {
  REQUEST_USER_DATA,
  UPLOAD_USER_DATA,
  DELETE_USER_DATA,
  CHOISE_USER_AVATAR,
  CHANGE_USER_PROFILE_INFO,
  ADD_TO_FRIENDS,
  ADD_POST,
} = userType;
const {
  getUserData,
  getStorageData,
  uploadStorageData,
  getFriendsData,
  searchPeople,
  deleteStorageData,
  postAvatarUrl,
  postProfilerData,
  postFriendData,
  postPostsData,
} = userAPI;
const { SEARCH_USER } = appType;

const {
  loadUserDataIndicator,
  setPostsData,
  setImageData,
  setFriendsData,
  setUserData,
  setInfoData,
  changeEditable,
} = userActions;

function* warkerUserData({ payload }: any) {
  try {
    yield put(loadUserDataIndicator(true));
    const userData = yield call(getUserData, payload.currentId);
    const images = yield call(getStorageData, payload.currentId, 'images');
    const friends = yield call(getFriendsData, userData.friends);
    payload.userId === payload.currentId
      ? yield put(changeEditable(true))
      : yield put(changeEditable(false));
    yield put(setUserData(userData));
    yield put(setFriendsData(friends));
    yield put(setImageData(images));
    yield put(loadUserDataIndicator(false));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserStorageUpload({ payload }: any) {
  try {
    yield call(uploadStorageData, payload.file, payload.id, 'images');
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserStorageDelete({ payload }: any) {
  try {
    yield call(deleteStorageData, payload.name, payload.id, 'images');
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
    yield call(postAvatarUrl, payload.value, payload.id);
    yield put(setInfoData(payload));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserProfileChanged({ payload }: any) {
  try {
    yield call(postProfilerData, payload.value, payload.type, payload.userId);
    yield put(setInfoData(payload));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerAddFriends({ payload }: any) {
  try {
    yield call(postFriendData, payload.currentId, payload.userId);
  } catch (error) {
    yield console.log(error);
  }
}


function* warkerPost({ payload }: any) {
  try {
    yield call(postPostsData, payload.values, payload.userId);
    yield put(setPostsData([payload.values]));
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchUser() {
  yield takeEvery(REQUEST_USER_DATA, warkerUserData);
  yield takeEvery(UPLOAD_USER_DATA, warkerUserStorageUpload);
  yield takeEvery(DELETE_USER_DATA, warkerUserStorageDelete);
  yield takeEvery(SEARCH_USER, warkerSearchUser);
  yield takeEvery(CHOISE_USER_AVATAR, warkerUserAvatar);
  yield takeEvery(CHANGE_USER_PROFILE_INFO, warkerUserProfileChanged);
  yield takeEvery(ADD_TO_FRIENDS, warkerAddFriends);
  yield takeEvery(ADD_POST, warkerPost);
}

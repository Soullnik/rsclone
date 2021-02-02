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
} = userType;
const { SEARCH_USER } = appType;

const { getProfileData, getAudioData, getImageData, loadUserData, editableTurnOn } = userActions;

function* warkerUserData({ payload }: any) {
  try {
    const profile = yield call(fetchUserData, payload);
    const friends = yield call(fetchFriendsData, payload);
    const images = yield call(fetchStorageData, payload, 'images');
    const audio = yield call(fetchStorageData, payload, 'musics');
    if (localStorage.userId === payload) yield put(editableTurnOn());
    yield put(getProfileData(profile));
    // yield put(getFriendsData(friends))
    yield put(getAudioData(audio));
    yield put(getImageData(images));
    yield put(loadUserData());
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
    // yield put(viewUserList(userList));
  } catch (error) {
    yield console.log(error);
  }
}

function* warkerUserProfileChanged({ payload }: any) {
  try {
    yield console.log(payload)
    yield call(postProfilerData, payload.value, payload.type, payload.id);
    const profile = yield call(fetchUserData, payload.id);
    yield put(getProfileData(profile));
    // yield put(viewUserList(userList));
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
}

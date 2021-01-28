import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchUserData, fetchStorageData } from '../../../api/user';
import { userActions } from '../../actions';
import { userType } from '../../actionsTypes';

const { REQUEST_USER_DATA } = userType;

const { getProfileData, getAudioData, getImageData } = userActions;

function* warkerUserData({ payload }: any) {
  try {
    const profile = yield call(fetchUserData, payload);
    const images = yield call(fetchStorageData, payload, 'images');
    const audio = yield call(fetchStorageData, payload, 'musics');
    yield put(getProfileData(profile));
    yield put(getAudioData(audio));
    yield put(getImageData(images));
  } catch (error) {
    yield console.log(error)
  }
}


export function* watchUser() {
  yield takeEvery(REQUEST_USER_DATA, warkerUserData);
}
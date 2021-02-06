import { push } from 'connected-react-router';
import { takeEvery, put, call } from 'redux-saga/effects';
import { userAPI } from '../../../api';
import { userActions } from '../../actions';
import { userType } from '../../actionsTypes';

const {
  REQUEST_CHATS_DATA
} = userType;
const {
  getChatsData
} = userAPI;

const {
  loadUserDataIndicator,
  // getChatsData 
} = userActions;

function* warkerChatsData({ payload }: any) {
  try {
    // yield put(loadUserDataIndicator(true));
    const chats = yield call(getChatsData, payload)
    // const userData = yield call(getUserData, payload.currentid);
    // const images = yield call(getStorageData, payload.currentid, 'images');
    // const friends = yield call(getFriendsData, userData.friends);
    // payload.id === payload.currentid
    //   ? yield put(changeEditable(true))
    //   : yield put(changeEditable(false));
    // yield put(setUserData(userData))
    // yield put(setFriendsData(friends))
    // yield put(setImageData(images));
    // yield put(loadUserDataIndicator(false));
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchMessenger() {
  yield takeEvery(REQUEST_CHATS_DATA, warkerChatsData);
  
}

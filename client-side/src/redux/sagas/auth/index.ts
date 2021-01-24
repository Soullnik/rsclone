import { takeEvery, put, call } from 'redux-saga/effects';
import { auth } from '../../../configs/configFirebase';
import { authActions } from '../../actions';
import { authType } from '../../actionsTypes';

const {
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_LOADING,
  HIDE_LOADING,
  SIGNIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
  FORGOT_USER,
} = authType;

const {
  showAlert,
  hideAlert,
  showLoading,
  hideLoading,
  signIn,
  signOut,
  signUp,
  forgot,
  signInComplete
} = authActions;

const delay = (ms: number) => {
  return new Promise<void>((r) => setTimeout(() => r(), ms));
};

async function fetchData(action: any) {
  const response = await auth.signInWithEmailAndPassword(action.email, action.password);
  auth.onAuthStateChanged(() => {});
  return response.user?.uid
}

function* warkerAuth({ payload }: any) {
  try {
    const id = yield call(fetchData, payload);
    yield put(signInComplete(id));
  } catch (error) {
    yield put(showAlert('Проверьте правильность введенных данных'));
    yield delay(3000);
    yield put(hideAlert());
  }
}

export function* watchAuth() {
  yield takeEvery(SIGNIN_USER, warkerAuth);
}
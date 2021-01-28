import { takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { confirmedSignIn, confirmedSignUp, confirmedSignOut, authDataAdd } from '../../../api/auth';
import { fetchUserData } from '../../../api/user';
import { authActions, userActions } from '../../actions';
import { authType } from '../../actionsTypes';
import { delay } from '../../../utils/helpers';

const { SIGNIN_USER, SIGNUP_USER, SIGNOUT_USER } = authType;

const { getProfileData } = userActions;

const {
  showAlertSuccess,
  hideAlertSuccess,
  showAlertError,
  hideAlertError,
  signInComplete,
  signOutComplete,
} = authActions;

function* warkerSignUp({ payload }: any) {
  try {
    const id = yield call(confirmedSignUp, payload);
    yield call(authDataAdd, id, payload);
    yield put(showAlertSuccess('Пользователь создан'));
    yield delay(3000);
    yield put(hideAlertSuccess());
    yield put(push('/'));
  } catch (error) {
    yield console.log(error)
    yield put(showAlertError('Проверьте правильность введенных данных'));
    yield delay(3000);
    yield put(hideAlertError());
  }
}

function* warkerSignIn({ payload }: any) {
  try {
    const id = yield call(confirmedSignIn, payload);
    yield localStorage.setItem('userId', id);
    yield put(signInComplete(id));
    const data = yield call(fetchUserData, id);
    yield put(getProfileData(data));
  } catch (error) {
    yield put(showAlertError('Проверьте правильность введенных данных'));
    yield delay(3000);
    yield put(hideAlertError());
  }
}

function* warkerSignOut() {
  try {
    yield localStorage.removeItem('userId');
    yield call(confirmedSignOut);
    yield put(signOutComplete());
  } catch (error) {
    console.log(error);
  }
}


export function* watchAuth() {
  yield takeEvery(SIGNIN_USER, warkerSignIn);
  yield takeEvery(SIGNUP_USER, warkerSignUp);
  yield takeEvery(SIGNOUT_USER, warkerSignOut);
}

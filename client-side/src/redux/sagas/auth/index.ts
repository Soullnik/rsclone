import { takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { confirmedSignIn, confirmedSignUp, confirmedSignOut, authDataAdd } from '../../../api/auth';
import { authActions, appActions } from '../../actions';
import { authType } from '../../actionsTypes';
import { delay } from '../../../utils/helpers';

const { SIGNIN_USER, SIGNUP_USER, SIGNOUT_USER } = authType;

const { showAlertSuccess, hideAlertSuccess, showAlertError, hideAlertError } = authActions;
const { signInComplete, signOutComplete } = appActions;

function* warkerSignUp({ payload }: any) {
  try {
    const id = yield call(confirmedSignUp, payload);
    yield call(authDataAdd, id, payload);
    yield put(showAlertSuccess());
    yield delay(3000);
    yield put(hideAlertSuccess());
    yield put(push('/auth'));
  } catch (error) {
    console.dir(error);
    yield put(showAlertError());
    yield delay(3000);
    yield put(hideAlertError());
  }
}

function* warkerSignIn({ payload }: any) {
  try {
    const id = yield call(confirmedSignIn, payload);
    yield put(signInComplete(id));
    yield put(push(`/content/profile/${id}`));
  } catch (error) {
    console.log(error);
    yield put(showAlertError());
    yield delay(3000);
    yield put(hideAlertError());
  }
}

function* warkerSignOut() {
  try {
    yield call(confirmedSignOut);
    yield put(signOutComplete());
    yield localStorage.removeItem('userId');
    yield put(push('/auth'));
  } catch (error) {
    console.log(error);
  }
}

export function* watchAuth() {
  yield takeEvery(SIGNIN_USER, warkerSignIn);
  yield takeEvery(SIGNUP_USER, warkerSignUp);
  yield takeEvery(SIGNOUT_USER, warkerSignOut);
}

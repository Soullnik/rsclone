import { push } from 'connected-react-router';
import { takeEvery, put, call } from 'redux-saga/effects';
import { messangerAPI } from '../../../api';
import { messangerType } from '../../actionsTypes';
import { messangerActions } from '../../actions';

const { REQUEST_CHATS_DATA, OPEN_CHAT_WITH_USER } = messangerType;
const { getChatsData, createChat, addChatForUser } = messangerAPI;
const { setChatsData, loadChatsDataIndicator } = messangerActions;

function* warkerChatsData({ payload }: any) {
  try {
    yield put(loadChatsDataIndicator(true));
    const chats = yield call(getChatsData, payload);
    yield put(setChatsData(chats));
    yield put(loadChatsDataIndicator(false));
  } catch (error) {
    yield console.log(error);
  }
}


function* warkerOpenChat({ payload }: any) {
  try {
    const chatId = yield call(createChat, payload.userId, payload.currentId);
    if (chatId.new) {
      yield call(addChatForUser, chatId.id, payload.currentId, payload.userId);
    }
    // yield put(push(`/content/messenger/${chatId.id}`));
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchMessenger() {
  yield takeEvery(REQUEST_CHATS_DATA, warkerChatsData);
  yield takeEvery(OPEN_CHAT_WITH_USER, warkerOpenChat);
}

import { push } from 'connected-react-router';
import { takeEvery, put, call, take } from 'redux-saga/effects';
import { messangerAPI } from '../../../api';
import { messangerType } from '../../actionsTypes';
import { messangerActions } from '../../actions';
import { getChatsList } from '../../../api/messanger';

const { REQUEST_CHATS_DATA, OPEN_CHAT_WITH_USER } = messangerType;
const { getChatsData, createChat, addChatForUser } = messangerAPI;
const { setChatsData, loadChatsDataIndicator } = messangerActions;

function* warkerChatsData({ payload }: any) {
  try {
    yield put(loadChatsDataIndicator(true));
    const chatsList = yield call(getChatsList, payload);
    const channel = yield call(getChatsData, payload, chatsList);
    try {
      while (true) {
        const result = yield take(channel);
        yield put(setChatsData(result));
        yield put(loadChatsDataIndicator(false));
      }
    } finally {
      console.log('socket terminated');
      yield put(loadChatsDataIndicator(false));
    }
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
    yield put(push(`/content/messenger/${chatId.id}`));
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchMessenger() {
  yield takeEvery(REQUEST_CHATS_DATA, warkerChatsData);
  yield takeEvery(OPEN_CHAT_WITH_USER, warkerOpenChat);
}

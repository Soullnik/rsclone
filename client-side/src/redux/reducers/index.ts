import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { authReducer } from './authReducer';
import { appReducer} from './appReducer'
import { userReducer} from './userReducer'

export default (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer,
    app: appReducer
  });

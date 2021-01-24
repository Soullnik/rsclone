import { combineReducers } from 'redux';

import { authReducer } from './authReducer';

// import { userReducer} from './reducers/userReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
});

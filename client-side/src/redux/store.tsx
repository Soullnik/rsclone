import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
import {saga} from './sagas';

const history: History = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

const store = createStore(createRootReducer(history), compose(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);

export { history };

export default store;
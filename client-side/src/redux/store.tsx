// import { createBrowserHistory, History } from 'history';
// import { routerMiddleware } from 'connected-react-router';
// import { createStore, applyMiddleware, compose } from 'redux';

// import createSagaMiddleware from 'redux-saga';

// import createRootReducer from './reducers';
// import sagas from './sagas';

// const history: History = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();
// const middleware = [routerMiddleware(history), sagaMiddleware];

// const store = createStore(createRootReducer(history), compose(applyMiddleware(...middleware)));

// sagaMiddleware.run(sagas);

// export { history };

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

const initialState = {};
const enhancers: any[] = [];
const composedEnhancers = compose(applyMiddleware(), ...enhancers);

export const store = createStore(rootReducer, initialState, composedEnhancers);

import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';
import Home from '../pages/home/Home';


export default () => (
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <ConnectedRouter history={history}>
        <Switch>
          <Suspense fallback={<div />}>
          <Route exact path="/" component={Home} />
            {/* <Route component={NotFound} /> */}
          </Suspense>
        </Switch>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
);

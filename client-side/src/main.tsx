import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, {history} from './redux/store';
import MainRouter from './router';
import './configs/i18n';

import './main.scss';

const App: React.FC = () => {
   return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

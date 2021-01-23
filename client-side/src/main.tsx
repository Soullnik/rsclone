import React, { useMemo, useReducer } from 'react';
import ReactDOM from 'react-dom';
import dataContext from './context';
import { reducer, initialstate } from './reduxStore';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import MainRouter from './router';
import './configs/i18n';

import './main.scss';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <dataContext.Provider value={contextValue}>
      <MainRouter />
    </dataContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

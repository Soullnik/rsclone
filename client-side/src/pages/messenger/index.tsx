import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Chat from '../../components/chat';
import ChatsList from '../../components/chatsList';

const Messenger: React.FC = () => {
  return (
    <Switch>
      <Route path={`/content/messenger/:id`} component={Chat} />
      <Route path={`/content/messenger`} component={ChatsList} />
      <Redirect to={`/content/messenger`} />
    </Switch>
  );
};

export default Messenger;

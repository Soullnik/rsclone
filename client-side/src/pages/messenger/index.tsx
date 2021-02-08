import React, { useEffect, useContext } from 'react';
import { List } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import Chat from '../../components/chat';
import ChatsList from '../../components/chatsList'

type Props = {};

const Messenger: React.FC<Props> = () => {

  return (
    <Switch>
      <Route path={`/content/messenger/:id`} component={Chat} />
      <Route path={`/content/messenger`} component={ChatsList} />
      <Redirect to={`/content/messenger`} />
    </Switch>
  );
};

export default Messenger;



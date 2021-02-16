import React, { Suspense, lazy, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../../layout';

import { requestUserData } from '../../redux/actions/user';
import { requestChatsData } from '../../redux/actions/messanger';
import './style.scss';

const Content: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.app.userId);
  const currentId = useSelector((state: any) => state.app.currentUser);
  const { Content } = Layout;

  const MessengerList = lazy(() => import('../../pages/messenger'));
  const News = lazy(() => import('../../pages/news'));
  const Profile = lazy(() => import('../../pages/profile'));

  useEffect(() => {
    dispatch(requestUserData({ currentId, userId }));
  }, [currentId]);

  useEffect(() => {
    dispatch(requestChatsData({ userId }));
  }, []);

  return (
    <Fragment>
      <Side />
      <Layout>
        <Header />
        <Content className="main">
          <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
            <Switch>
              <Route path={`/content/profile/:id`} component={Profile} />
              <Route path="/content/messenger" component={MessengerList} />
              <Route path="/content/news" component={News} />
              <Redirect to={`/content/profile/${userId}`} />
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Content;

import React, { Suspense, lazy, Fragment, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../../layout';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserData } from '../../redux/actions/user';
import { requestChatsData } from '../../redux/actions/messanger';

const Content: React.FC = () => {
  const dispatch = useDispatch();
  const id = useSelector((state: any) => state.app.userId);
  const currentid = useSelector((state: any) => state.app.currentUser);
  const chats = useSelector((state: any) => state.messanger.chats);
  const { Content } = Layout;

  useEffect(() => {
    dispatch(requestUserData({ currentid, id }));
  }, [currentid]);

  useEffect(() => {
    dispatch(requestChatsData({ id }));
  }, [chats]);

  const MessengerList = lazy(() => import('../../pages/messenger'));
  const News = lazy(() => import('../../pages/news'));
  const Profile = lazy(() => import('../../pages/profile'));

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
              <Redirect to={`/content/profile/${id}`} />
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Content;

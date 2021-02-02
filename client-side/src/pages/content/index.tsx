import React, { Suspense, lazy, Fragment, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../../layout';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserData } from '../../redux/actions/user';

const Content: React.FC = () => {
  const dispatch = useDispatch()
  const id = useSelector((state: any) => state.app.userId);
  const { Content } = Layout;

  useEffect(() => {
    dispatch(requestUserData(id));
  }, [id]);

  const Messenger = lazy(() => import('../messenger'));
  const News = lazy(() => import('../news'));
  const Profile = lazy(() => import('../profile'));

  return (
    <Fragment>
      <Side />
      <Layout>
        <Header />
        <Content className="main">
          <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/profile" render={() => <Profile />} />
              <Route path="/messenger" component={Messenger} />
              <Route path="/news" component={News} />
              <Redirect to={`/profile`} />
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Content;

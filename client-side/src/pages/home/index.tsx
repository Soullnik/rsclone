import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../../layout';
import './style.scss'

const Home: React.FC = () => {
  const { Content } = Layout;

  const Messenger = lazy(() => import('../messenger'));
  const News = lazy(() => import('../news'));
  const Profile = lazy(() => import('../profile'));

  return (
    <Fragment>
      <Side />
      <Layout>
        <Header />
        <Content className="main" >
          <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/messenger" component={Messenger} />
              <Route path="/news" component={News} />
              <Redirect to="/profile" />
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Home;

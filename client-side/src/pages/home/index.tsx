import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../../layout';

type Props = {};

const Messenger = lazy(() => import('../messenger'));
const News = lazy(() => import('../news'));
const Profile = lazy(() => import('../profile'));

const Home: React.FC<Props> = () => {
  const { Content } = Layout;
  return (
    <Fragment>
      <Side />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: '10px 16px' }}>
          <Suspense fallback={<Spin size="small" style={{ margin: 'auto' }} />}>
            <Switch>
              <Route path="/messenger" component={Messenger} />
              <Route path="/news" component={News} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Home;

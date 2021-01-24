import React, { Suspense, lazy, Fragment, useEffect, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../../layout';

const Home: React.FC = () => {
  const { Content } = Layout;
  

  const Messenger = lazy(() => import('../messenger'));
  const News = lazy(() => import('../news'));
  const Profile = lazy(() => import('../profile'));

  return (
    <Fragment>
      <Side />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: '10px 16px', display: 'flex', flexDirection: 'column' }}>
          <Suspense fallback={<Spin size='large' style={{ margin: 'auto' }} />}>
            <Switch>
              <Route path="/messenger" component={Messenger} />
              <Route path="/news" component={News} />
              <Route path="/profile" component={Profile} />
              <Route path="/" component={Profile} />
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Home

  



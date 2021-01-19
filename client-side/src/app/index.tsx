import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../layout';

const Home = lazy(() => import('../pages/home'));
const Messenger = lazy(() => import('../pages/messenger'));
const News = lazy(() => import('../pages/news'));
const Profile = lazy(() => import('../pages/profile'));

const App = () => {
  const { Content } = Layout;

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout style={{ minHeight: '100vh' }}>
          <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
            <Side />
            <Layout className="site-layout">
              <Header />
              <Content style={{ margin: '10px 16px' }}>
                <Switch>
                  {/* <Route path="/sign-in" render={() => <SignIn />} />
                  <Route path="/sign-up" render={() => <SignUp />} /> */}
                  <Route path="/messenger" render={() => <Messenger />} />
                  <Route path="/news" render={() => <News />} />
                  <Route path="/profile" render={() => <Profile />} />
                  <Route exact path="/" render={() => <Home />} />
                </Switch>
              </Content>
              <Footer />
            </Layout>
          </Suspense>
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
};
export default App;

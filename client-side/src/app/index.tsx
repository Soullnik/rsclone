import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../layout';
import { Home, Messenger, News, Profile } from '../pages';

const App = () => {
  const { Content } = Layout;

  return (
    <Provider store={store}>
      <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
        <BrowserRouter basename="/">
          <ConnectedRouter history={history}>
            <Layout style={{ minHeight: '100vh' }}>
              <Side />
              <Layout className="site-layout">
                <Header />
                <Content style={{ margin: '10px 16px' }}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/messenger" component={Messenger} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/profile" component={Profile} />
                  </Switch>
                </Content>
                <Footer />
              </Layout>
            </Layout>
          </ConnectedRouter>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};
export default App;

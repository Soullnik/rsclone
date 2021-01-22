import React, { Suspense, lazy, Fragment, useEffect, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { Header, Footer, Side } from '../../layout';
import { actions } from '../../reduxStore';
import dataContext from '../../context';

const Home: React.FC = () => {
  const { Content } = Layout;
  const { state, dispatch } = useContext(dataContext);

  useEffect(() => {
    actions.getUsers(dispatch);
  }, []);

  const Messenger = lazy(() => import('../messenger'));
  const News = lazy(() => import('../news'));
  const Profile = lazy(() => import('../profile'));


  
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

export default Home

  // return (
  //   <List
  //     itemLayout="horizontal"
  //     dataSource={state?.users}
  //     renderItem={(item) => (
  //       <List.Item>
  //         <List.Item.Meta key={item.id} title={item.login} description={item.password} />
  //       </List.Item>
  //     )}
  //   />



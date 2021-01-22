import React, { useEffect, useContext } from 'react';
import { actions } from '../../reduxStore';
import dataContext from '../../context';
import { List } from 'antd';

const Home: React.FC = () => {
  const { state, dispatch } = useContext(dataContext);

  useEffect(() => {
    actions.getUsers(dispatch);
  }, []);

  console.log(state)
  return (
    <List
      itemLayout="horizontal"
      dataSource={state?.users}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta key={item.id} title={item.login} description={item.password} />
        </List.Item>
      )}
    />
  );
};

export default Home;

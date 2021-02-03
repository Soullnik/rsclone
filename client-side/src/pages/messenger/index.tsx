import React, { useEffect, useContext } from 'react';
// import { actions } from '../../redux';
// import dataContext from '../../context';
import { List } from 'antd';

type Props = {};

const Messenger: React.FC<Props> = () => {
  // const { state, dispatch } = useContext(dataContext);

  // useEffect(() => {
  //   actions.getUsers(dispatch);
  // }, []);

  return (
    <List
      itemLayout="horizontal"
      // dataSource={state?.user}
      renderItem={(item:any) => (
        <List.Item>
          <List.Item.Meta key={item.id} title={item.login} description={item.password} />
        </List.Item>
      )}
    />
  );
};

export default Messenger;

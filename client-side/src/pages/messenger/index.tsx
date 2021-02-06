// import React, { useEffect, useContext } from 'react';
// // import { actions } from '../../redux';
// // import dataContext from '../../context';
// import { List } from 'antd';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import Chat from '../../components/chat';

// type Props = {};

// const Messenger: React.FC<Props> = () => {
//   // const { state, dispatch } = useContext(dataContext);

//   // useEffect(() => {
//   //   actions.getUsers(dispatch);
//   // }, []);

//   return (
//     <Switch>
//       <Route path={`/content/messenger/:id`} component={Chat} />
//       <Route path={`/content/messenger`} render={() => <List />} />
//       <Redirect to={`/content/messenger`} />
//     </Switch>
//   );
// };

// export default Messenger;

import React, { useState } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import { messangerActions } from '../../redux/actions';

import './style.scss'


const { requestChatData } = messangerActions;

const MessengerList: React.FC = () => {
  const dispath = useDispatch();
  const loadingChats = useSelector((state: any) => state.messanger.loading);
  const chats = useSelector((state: any) => state.messanger.chats);
  const userId = useSelector((state: any) => state.app.userId);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (chats.length > 14) {
      message.warning('Infinite List loaded all');
      setLoading(false);
      setHasMore(false);
      return;
    }
    dispath(requestChatData(userId));
    setLoading(false);
  };

  if (!loadingChats) {
    return (
      <div className="demo-infinite-container">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          dataSource={chats}
          renderItem={(item: any) => (
            <List.Item key={item}>
              <List.Item.Meta
                // avatar={
                //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                // }
                title={<a href="https://ant.design">{item}</a>}
                description={''}
              />
            </List.Item>
          )}
        >
          {loading && hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
    );
  } else {
    return <Spin style={{margin: 'auto'}} size="large" />;
  }
};


export default MessengerList



import React, { useState } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import { messangerActions } from '../../redux/actions';

import './style.scss';
import { Link } from 'react-router-dom';

const { requestChatsData } = messangerActions;

const ChatsList: React.FC = () => {
  const dispatch = useDispatch();
  const loadingChats = useSelector((state: any) => state.messanger.loading);
  const chats = useSelector((state: any) => state.messanger.chats);
  const id = useSelector((state: any) => state.app.userId);
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
    // dispatch(requestChatsData({ id }));
    setLoading(false);
  };

  console.log('message render');

  return (
    <div className="demo-infinite-container">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        // hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={chats}
          renderItem={(item: any) => {
            return (
              <Link to={`/content/messenger/${item.id}`}>
                <List.Item className="list-chats" key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.name}
                    description={item.lastPost[item.lastPost.lenght - 1]}
                  />
                </List.Item>
              </Link>
            );
          }}
        >
          {loading && hasMore && (
            <div className="demo-loading-container">
              спин
              {/* <Spin /> */}
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
};

export default ChatsList;

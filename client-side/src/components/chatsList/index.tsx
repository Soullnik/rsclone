import React, { useEffect } from 'react';
import { List, Avatar, Spin, Comment } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { messangerActions } from '../../redux/actions';

import './style.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ChatsList: React.FC = () => {
  const loadingChats = useSelector((state: any) => state.messanger.loading);
  const chats = useSelector((state: any) => state.messanger.chats);

  if (loadingChats) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="chats-container">
      <List
        size={'large'}
        grid={{ gutter: 16, column: 1 }}
        dataSource={chats}
        renderItem={(item: any) => {
          return (
            <Link to={`/content/messenger/${item.id}`}>
              <List.Item className="list-chats" key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.name}
                  description={
                    Object.keys(item.lastPost).length ? (
                      <Comment
                        author={item.lastPost.author}
                        avatar={item.lastPost.avatar}
                        content={item.lastPost.text}
                        datetime={
                          <span>{moment(item.lastPost.time.toDate()).format('HH:mm')}</span>
                        }
                      />
                    ) : (
                      ''
                    )
                  }
                />
              </List.Item>
            </Link>
          );
        }}
      ></List>
    </div>
  );
};

export default ChatsList;

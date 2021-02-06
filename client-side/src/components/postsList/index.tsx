import React, { useEffect, useRef } from 'react';
import { Comment, Tooltip, List } from 'antd';

import moment from 'moment';
import { useSelector } from 'react-redux';
import { capitalize } from '../../utils/helpers';

const Posts = () => {
  const listref = useRef();
  const profileData = useSelector((state: { user: any }) => state.user.profile);
  const posts = useSelector((state: { user: any }) => state.user.posts);
  // ref={(el) => { this.messagesEnd = el; }}
  const data = posts.map((item: any) => {
    return {
      author: `${capitalize(profileData.firstName)} ${capitalize(profileData.lastName)}`,
      avatar: profileData.avatar,
      content: <p>{item.text}</p>,
      datetime: (
        <Tooltip title={moment(item.time.toDate()).format('YYYY.MM.DD HH:mm:ss')}>
          <span>{moment(item.time.toDate()).fromNow()}</span>
        </Tooltip>
      ),
    };
  });

  return (
    <List
      style={{ maxHeight: '170px' }}
      className="comment-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: any) => (
        <li>
          <Comment
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    >
      <div  style={{ float: 'left', clear: 'both' }}></div>
    </List>
  );
};

export default Posts;

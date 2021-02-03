import React, { useEffect } from 'react';
import { Comment, Tooltip, List } from 'antd';

import moment from 'moment';
import { useSelector } from 'react-redux';
import { capitalize } from '../../utils/helpers';

const Posts = () => {
  const profileData = useSelector((state: { user: any }) => state.user.profile);
  const posts = useSelector((state: { user: any }) => state.user.posts);
  const data = posts.map((item: any) => {
    return {
      author: `${capitalize(profileData.firstName)} ${capitalize(profileData.lastName)}`,
      avatar: item.avatar,
      content: (
        <p>
          {item.text}
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    }
  })

  useEffect(()=> {

  }, [posts])

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
    />
  );
};


export default Posts
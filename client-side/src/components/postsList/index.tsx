import React from 'react';
import { Comment, Tooltip, List } from 'antd';

import moment from 'moment';
import { useSelector } from 'react-redux';
import { capitalize } from '../../utils/helpers';

const Posts = () => {
  const profileData = useSelector((state: { user: any }) => state.user.profile);
  const data = [
    {
      author: `${capitalize(profileData.firstName)} ${capitalize(profileData.lastName)}`,
      avatar: profileData.avatar,
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <List
      style={{ maxHeight: '300px' }}
      className="comment-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
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
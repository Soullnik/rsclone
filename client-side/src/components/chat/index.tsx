import React, { useState } from 'react';
import { Comment, Avatar, Row, Col } from 'antd';
import MessageList from '../messageList';
import MessageEditor from '../messageEditor';
import moment from 'moment';

import './style.scss';

const Chat = () => {
  const [comments, setComments] = useState([{}]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      const newComments = [
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ];
      setComments(newComments);
    }, 1000);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Row gutter={0} align="bottom" className="chat">
      <Col span={24} >{comments.length > 0 && <MessageList />}</Col>
      <Col span={24}>
        <MessageEditor
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          buttonTitle="Send message"
          value={value}
        />
      </Col>
    </Row>
  );
};

export default Chat;

import React, { useState } from 'react';
import { Comment, Avatar } from 'antd';
import MessageList from '../messageList'
import MessageEditor from '../messageEditor'
import moment from 'moment';



const Chat = () => {
  const [comments, setComments] = useState([{}]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true);

    // setTimeout(() => {
    //   setSubmitting(false);
    //   setValue('');
    //   const newComments = [
    //     ...comments,
    //     {
    //       author: 'Han Solo',
    //       avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //       content: <p>{value}</p>,
    //       datetime: moment().fromNow(),
    //     },
    //   ];
    //   setComments(newComments);
    // }, 1000);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      {comments.length > 0 && <MessageList comments={comments} />}
      {/* <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <MessageEditor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      /> */}
    </>
  );
};


export default Chat
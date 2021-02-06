import React from 'react';
import { Comment, List } from 'antd';

const MessageList = ({ comments }: any) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={(props: any) => <Comment {...props} />}
  />
);


export default MessageList
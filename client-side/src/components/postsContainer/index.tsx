import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, Tooltip, Form, Input, Button } from 'antd';
import moment from 'moment';
import { capitalize } from '../../utils/helpers';
import { useTranslation } from 'react-i18next';
import { userActions } from '../../redux/actions';
import firebase from 'firebase/app';



const PostContainer = () => {
  const dispatch = useDispatch();
  const ulRef = useRef<HTMLUListElement | null>(null);
  const userId = useSelector((state: any) => state.app.userId);
  const editable = useSelector((state: any) => state.user.editable);
  const profileData = useSelector((state: { user: any }) => state.user.profile);
  const posts = useSelector((state: { user: any }) => state.user.posts);
  const { t } = useTranslation();
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
  
  const { sendPost } = userActions;
  const [form] = Form.useForm();

  const onFinish = ({ values, userId }: any) => {
    form.resetFields();
    dispatch(
      sendPost({
        values: {
          text: values.post,
          time: firebase.firestore.Timestamp.fromDate(moment().toDate()),
        },
        userId,
      })
    );
  };

  useEffect(() => {
    if (ulRef.current !== null) {
      //dispatch(fn(ulRef.current.scrollHeight))
      ulRef.current.addEventListener('scroll', (event) => {
        console.log('был скролл');
      });
      console.log(ulRef.current.scrollHeight);
      console.log(ulRef.current.scrollTop);
      ulRef.current.scrollLeft = ulRef.current.scrollHeight + 1;
      console.log(ulRef.current.scrollLeft);
    }
  }, [ulRef.current?.scrollTop]);

  return (
    <React.Fragment>
      <div className="ant-list ant-list-split comment-list" style={{ maxHeight: '170px' }}>
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <ul ref={ulRef} className="ant-list-items">
              {data.map((item: any, index: any) => {
                return (
                  <li key={index}>
                    <Comment
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                    />
                  </li>
                );
              })}
              {/* <div style={{ float: 'left', clear: 'both' }}></div> */}
            </ul>
          </div>
        </div>
      </div>
      {editable ? (
        <Form
          form={form}
          name="normal_post"
          className="post-form"
          onFinish={(values) => onFinish({ values, userId })}
        >
          <Form.Item name="post">
            <Input.TextArea allowClear={true} autoSize={{ minRows: 2, maxRows: 6 }} bordered />
          </Form.Item>
          {editable && (
            <Form.Item>
              <Button type="primary" htmlType="submit" className="post-form-button">
                {t('content.postFrom.button')}
              </Button>
            </Form.Item>
          )}
        </Form>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default PostContainer;

import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import firebase from 'firebase/app';
import { useTranslation } from 'react-i18next';

import { userActions } from '../../redux/actions';
import moment from 'moment';

const { sendPost } = userActions;

const PostsForm = () => {
  const dispatch = useDispatch();
  const editable = useSelector((state: any) => state.user.editable);
  const userId = useSelector((state: any) => state.app.userId);
  const { t } = useTranslation();

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

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default PostsForm;

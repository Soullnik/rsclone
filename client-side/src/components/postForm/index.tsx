import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { userActions } from '../../redux/actions';

const { sendPost } = userActions;

const PostsForm = () => {
  const dispatch = useDispatch();
  const editable = useSelector((state: any) => state.user.editable);
  const userId = useSelector((state: any) => state.app.userId);
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = ({ values, userId }: any) => {
    form.resetFields();
    dispatch(sendPost({ values: values.post, userId }));
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
              Запостить
            </Button>
          </Form.Item>
        )}
      </Form>
    </Fragment>
  );
};

export default PostsForm;

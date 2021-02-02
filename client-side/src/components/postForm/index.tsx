import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { authActions } from '../../redux/actions';

const { signIn } = authActions;

const PostsForm = () => {
  const dispatch = useDispatch();
  const alertError = useSelector((state: any) => state.auth.alertError);
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    form.resetFields()
    console.log(values);
    // dispatch(signIn(values));
  };


  return (
    <Fragment>
      <Form form={form} name="normal_post" className="post-form" onFinish={onFinish}>
        <Form.Item  name="post">
          <Input.TextArea allowClear={true} autoSize={{ minRows: 2, maxRows: 6 }} bordered />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="post-form-button">
            Запостить
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default PostsForm;

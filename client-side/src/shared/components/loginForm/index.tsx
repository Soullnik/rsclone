import React, { useEffect, useContext } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import dataContext from '../../../context';
import { actions } from '../../../reduxStore';

import Icon from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './styles.scss';

const LoginForm = () => {
  const { dispatch } = useContext(dataContext);
  const [form] = Form.useForm();

  const onFinish = (values: { email: string; password: string }) => {
    actions.loginUser(values.email, values.password, dispatch);
  };

  

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="login-form"
    >
      <h3 className="login-form__title">LOG IN</h3>
      <Form.Item name="email" rules={[{ required: true, message: 'Please add your email!' }]}>
        <Input
          type="email"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please add your Password!' }]}>
        <Input
          type="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>
        <Link to="/forgot">Forgot password</Link>
        <Button type="primary" htmlType="submit" className="login-form__button">
          Log in
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

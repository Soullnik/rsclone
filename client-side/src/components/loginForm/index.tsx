import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { authActions } from '../../redux/actions';

const {
  showAlert,
  hideAlert,
  showLoading,
  hideLoading,
  signIn,
  signOut,
  signUp,
  forgot,
} = authActions;

import './styles.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state: any) => state.auth.alert);
  const loading = useSelector((state: any) => state.auth.loading);

  const [form] = Form.useForm();

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(signIn(values));
  };

  return (
    <Form form={form} onFinish={onFinish} className="login-form">
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
        <Button type="primary" loading={loading} htmlType="submit" className="login-form__button">
          Log in
        </Button>
        {alert && <Alert message={alert} type="error" />}
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

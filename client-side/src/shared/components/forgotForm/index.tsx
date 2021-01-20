import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import Icon from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './styles.scss';

const Forgot = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: 'Bamboo',
      password: '11111',
    });
  }, []);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form className="forgot-form" form={form} onFinish={onFinish} initialValues={{ username: 'Bamboo', password: '1111' }}>
    <h3 className="forgot-form__title">FORGOT</h3>
    <Form.Item name="email" rules={[{ required: true, message: 'Please add your email!' }]}>
      <Input
        type="email"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Email"
      />
    </Form.Item>
    <Form.Item name="login" rules={[{ required: true, message: 'Please add your Password!' }]}>
      <Link to="/login">login now!</Link>
      <Button type="primary" htmlType="submit" className="forgot-form__button">
        Send email
      </Button>
      Or <Link to="/signup">register now!</Link>
    </Form.Item>
  </Form>
  );
};


export default Forgot;
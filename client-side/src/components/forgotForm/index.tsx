import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './styles.scss';

const Forgot = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form className="forgot-form" form={form} onFinish={onFinish}>
      <h3 className="forgot-form__title">FORGOT</h3>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Link to="/login">login now!</Link>
      <Button type="primary" htmlType="submit" className="forgot-form__button">
        Send email
      </Button>
      Or <Link to="/signup">register now!</Link>
    </Form>
  );
};

export default Forgot;

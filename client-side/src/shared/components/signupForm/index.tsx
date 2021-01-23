import React from 'react';
import { Form, Input, Button, Select } from 'antd';

import Icon from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './styles.scss';

const { Option } = Select

const SignupForm = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} className="signup-form" layout="horizontal">
      <h3 className="signup-form__title">SIGN UP</h3>
      <Form.Item name="firstName" rules={[{ required: true, message: 'Please add your firstName!' }]}>
        <Input
          type="text"
          prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="First Name"
        />
      </Form.Item>
      <Form.Item name="lastName" rules={[{ required: true, message: 'Please add your lastName!' }]}>
        <Input
          type="text"
          prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Last Name"
        />
      </Form.Item>
      <Form.Item name="gender" rules={[{ required: true, message: 'Please add your gender!' }]}>
          <Select placeholder="Select gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: 'Please add your email!' }]}>
          <Input
            type="email"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please add your email!' }]}>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
      </Form.Item>
      <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please add your email!' }]}>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Confirm Password"
          />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-form__button">
          Sign Up
        </Button>
        Or <Link to="/">Log In</Link>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;

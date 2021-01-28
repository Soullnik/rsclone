import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Tooltip, Select, Button, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Types } from '../../schemas';
import { Link } from 'react-router-dom';
import { authActions } from '../../redux/actions';

import './styles.scss';

const { signUp } = authActions;

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [alertSuccess, alertError] = useSelector((state: any) => [
    state.auth.alertSuccess,
    state.auth.alertError,
  ]);
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values: Types.TypeValue) => {
    dispatch(signUp(values));
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
  };

  const alert = (alertSuccess: any, alertError: any): void => {
    if (alertSuccess) {
      message.success(alertSuccess)
    }
    if (alertError) {
      message.error(alertError)
    } 
  }

  return (
    <Fragment>
      {alert(alertSuccess, alertError)}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        className="signup-form"
        onFinish={onFinish}
        scrollToFirstError
      >
        <h3 className="signup-form__title">SIGN UP</h3>
        <Form.Item
          name="email"
          label="E-mail"
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
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="firstName"
          label={
            <span>
              First Name&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your firstName!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label={
            <span>
              Last Name&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your lastName!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="gender" rules={[{ required: true, message: 'Please add your gender!' }]}>
          <Select placeholder="Select gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="signup-form__button">
            Sign Up
          </Button>
          Or <Link to="/">Log In</Link>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default SignUpForm;

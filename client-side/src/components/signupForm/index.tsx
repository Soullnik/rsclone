import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Tooltip, Select, Button, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Types } from '../../schemas';
import { Link } from 'react-router-dom';
import { authActions } from '../../redux/actions';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const { signUp } = authActions;

const { Option } = Select;

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

const SignUpForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [alertSuccess, alertError] = useSelector((state: any) => [
    state.auth.alertSuccess,
    state.auth.alertError,
  ]);
  const { t } = useTranslation();

  const onFinish = (values: Types.TypeValue) => {
    dispatch(signUp(values));
  };

  useEffect(() => {
    if (alertError) message.error(t('auth.alert.error'));
    if (alertSuccess) message.success(t('auth.alert.succcess'));
  }, [alertError, alertSuccess]);

  return (
    <Fragment>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        className="signup-form"
        onFinish={onFinish}
        scrollToFirstError
      >
        <h3 className="signup-form__title">{t('auth.signup.title')}</h3>
        <Form.Item
          name="email"
          label={t('auth.signup.email.label')}
          rules={[
            {
              type: 'email',
              message: t('auth.signup.email.message'),
            },
            {
              required: true,
              message: t('auth.signup.email.required'),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label={t('auth.signup.password.label')}
          rules={[
            {
              min: 6,
              max: 12,
              required: true,
              message: t('auth.signup.password.message'),
            },          
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label={t('auth.signup.confirmed.label')}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: t('auth.signup.confirmed.message'),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }           

                return Promise.reject(t('auth.signup.confirmed.error'));
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
          {t('auth.signup.submit')}
          </Button>
          {t('auth.or')} <Link to="/">{t('auth.links.signin')}</Link>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default SignUpForm;

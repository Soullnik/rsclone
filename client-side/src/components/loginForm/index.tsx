import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { authActions } from '../../redux/actions';

const { signIn } = authActions;

import './styles.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const alertError = useSelector((state: any) => state.auth.alertError);
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(signIn(values));
  };

  useEffect(() => {
    if (alertError) {
      message.error(t('auth.alert.signInError'));
    }
  }, [alertError]);

  return (
    <Fragment>
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h3 className="login-form-title">{t('auth.signin.title')}</h3>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: t('auth.signin.email.message'),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={t('auth.signin.email.placeholder')}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t('auth.signin.password.message'),
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={t('auth.signin.password.placeholder')}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>{t('auth.signin.remember')}</Checkbox>
          </Form.Item>
          <Link to="/forgot" className="login-form-forgot">
            {t('auth.links.forgot')}
          </Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            {t('auth.signin.submit')}
          </Button>
          {t('auth.or')} <Link to="/signup">{t('auth.links.signup')}</Link>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default LoginForm;

import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './styles.scss';

const Forgot = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form className="forgot-form" form={form} onFinish={onFinish}>
      <h3 className="forgot-form__title">{t('auth.forgot.title')}</h3>
      <Form.Item
        name="email"
        rules={[
          {
            type: t('auth.forgot.email.lable'),
            message: t('auth.forgot.email.message'),
          },
          {
            required: true,
            message: t('auth.forgot.email.required'),
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Link to="/auth/login">{t('auth.links.signin')}</Link>
      <Button type="primary" htmlType="submit" className="forgot-form__button">
      {t('auth.forgot.submit')}
      </Button>
      {t('auth.or')} <Link to="/auth/signup">{t('auth.links.signup')}</Link>
    </Form>
  );
};

export default Forgot;

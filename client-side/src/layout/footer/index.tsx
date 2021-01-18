import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';
// import LogoIcon from '../../shared/icons/LogoIcon';

const Footer = () => {
  const { t } = useTranslation();

  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: 'center' }}>
      RSSCHOOL
    </Footer>
  );
};

export default Footer;

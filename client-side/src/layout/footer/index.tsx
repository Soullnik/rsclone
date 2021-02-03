import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Avatar, Space } from 'antd';
import { useSelector } from 'react-redux';

import './style.scss';

const Footer = () => {
  const [vagimSize, setVadimSize] = useState(50);
  const [nikolaySize, setNikolaySize] = useState(50);
  const id = useSelector((state: any) => state.app.userId);
  const { t } = useTranslation();

  const { Footer } = Layout;

  return (
    <Footer
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
      }}
    >
      <Space>
        <Avatar.Group>
          <a
            href="https://github.com/Soullnik"
            target="_blank"
            rel="noopener noreferrer"
            className="ant-avatar ant-avatar-circle ant-avatar-image avatar-url"
          >
            <img src="/images/nikolayGit.jpg" />
          </a>
          <a
            href="https://github.com/Zolotou"
            target="_blank"
            rel="noopener noreferrer"
            className="ant-avatar ant-avatar-circle ant-avatar-image avatar-url"
          >
            <img src="/images/vadimGit.jpg" />
          </a>
        </Avatar.Group>
        <a target="_blank" className="rsschool-link" href="https://rs.school/js/">
          <img className="rsschool-image" src="/icons/rs_school_js.svg" alt="" />
        </a>
      </Space>
    </Footer>
  );
};

export default Footer;

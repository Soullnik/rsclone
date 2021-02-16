import React from 'react';
import { Layout} from 'antd';

import './style.scss';

const Footer = () => {
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
          <a
            href="https://github.com/Soullnik"
            target="_blank"
            rel="noopener noreferrer"
            className="ant-avatar ant-avatar-circle ant-avatar-image avatar-url"
          >
            <img src="/images/nikolayGit.jpg" />
          </a>
    </Footer>
  );
};

export default Footer;

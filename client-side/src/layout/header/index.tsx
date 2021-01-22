import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { Header } = Layout;

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const menu = (
    <Menu>
      <Menu.Item key="en" onClick={() => handleClick('en')}>
        En
      </Menu.Item>
      <Menu.Item key="ru" onClick={() => handleClick('ru')}>
        Ru
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ padding: 16 }}>
      <Dropdown overlay={menu} trigger={['hover']} placement="bottomCenter">
        <div style={{ lineHeight: '0', float: 'right', color: 'white', cursor: 'pointer' }}>
          <GlobalOutlined style={{ marginRight: '3px' }} />
          <span style={{ userSelect: 'none' }}>{t('len')}</span>
        </div>
      </Dropdown>
    </Header>
  );
};

export default Header;

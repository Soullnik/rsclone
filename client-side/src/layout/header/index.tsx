import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Dropdown, Button } from 'antd';
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
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button
          style={{
            float: 'right',
            color: 'white',
            border: 'none',
            outline: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
          }}
          icon={<GlobalOutlined />}
        >
          {t('len')}
        </Button>
      </Dropdown>
    </Header>
  );
};

export default Header;

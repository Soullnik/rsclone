import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Dropdown, Button, Space, Input } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
// import { actions } from '../../redux';

import './style.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { Header } = Layout;
  const { Search } = Input;

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const logOutHeandler = () => {
    // actions.logOut(dispatch);
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
    <Header className="header">
      <Search
        style={{ lineHeight: '0', maxWidth: '500px' }}
        placeholder="input search loading with enterButton"
        loading={false}
        enterButton
      />
      <Space size={'middle'} align={'center'}>
        <Button size={'middle'} onClick={logOutHeandler}>
          LOG OUT
        </Button>
        <Dropdown overlay={menu} trigger={['hover']} placement="bottomCenter">
          <div style={{ lineHeight: '0', color: 'white', cursor: 'pointer', minWidth: '50px' }}>
            <GlobalOutlined style={{ marginRight: '3px' }} />
            <span style={{ userSelect: 'none' }}>{t('len')}</span>
          </div>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default Header;

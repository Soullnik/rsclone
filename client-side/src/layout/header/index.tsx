import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { actions } from '../../reduxStore';
import dataContext from '../../context';

import './style.scss'

const Header = () => {
  const { dispatch } = useContext(dataContext);
  const { t, i18n } = useTranslation();
  const { Header } = Layout;

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const logOutHeandler = () => {
    actions.logOut(dispatch);
  }

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
    <Header className='header'>
      <Button size={'middle'} onClick={logOutHeandler} >
        LOG OUT
      </Button>
      <Dropdown overlay={menu} trigger={['hover']} placement="bottomCenter">
        <div style={{ lineHeight: '0', marginLeft: '5px', color: 'white', cursor: 'pointer' }}>
          <GlobalOutlined style={{ marginRight: '3px' }} />
          <span style={{ userSelect: 'none' }}>{t('len')}</span>
        </div>
      </Dropdown>
    </Header>
  );
};

export default Header;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Layout,Button, Space, Input } from 'antd';
import { authActions } from '../../redux/actions';
import Language from '../../components/language'

import './style.scss';

const { signOut } = authActions;

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { Header } = Layout;
  const { Search } = Input;

  const logOutHeandler = () => {
    dispatch(signOut());
  };

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
        <Language color='white' />
      </Space>
    </Header>
  );
};

export default Header;

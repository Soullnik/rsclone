import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import LogoIcon from '../../shared/icons/LogoIcon';

import './styles.scss';

const HeadeItems = () => {
  const { t } = useTranslation('header');

  return (
    <>
      <LogoIcon fill="#b5683f" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">{t('title')}</Menu.Item>
        <Menu.Item key="2">{t('title')}</Menu.Item>
        <Menu.Item key="3">{t('title')}</Menu.Item>
      </Menu>
    </>
  );
};

export default HeadeItems;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, MessageOutlined, ContainerOutlined } from '@ant-design/icons';
import LogoIcon from '../../shared/icons/LogoIcon';

const { Sider } = Layout;

const Side = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <LogoIcon />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item icon={<UserOutlined />} key="1">
          <Link to={'/profile'}> {t('description.part2')}</Link>
        </Menu.Item>
        <Menu.Item icon={<MessageOutlined />} key="2">
          <Link to={'/messenger'}>{t('description.part3')}</Link>
        </Menu.Item>
        <Menu.Item icon={<ContainerOutlined />} key="3">
          <Link to={'/news'}> {t('description.part4')}</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Side;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Layout, Menu, Grid } from 'antd';
import { UserOutlined, MessageOutlined, ContainerOutlined } from '@ant-design/icons';
import LogoIcon from '../../components/logo/LogoIcon';

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const Side = () => {
  const screens = useBreakpoint();
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  return !screens.sm ? (
    <div>MOBILE</div>
  ) : (
    <Sider onBreakpoint={(lg) => {if (lg)setCollapsed(collapsed)}} collapsed={collapsed} onCollapse={onCollapse}>
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

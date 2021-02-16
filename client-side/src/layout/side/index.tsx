import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Layout, Menu, Grid } from 'antd';
import { UserOutlined, MessageOutlined, ContainerOutlined } from '@ant-design/icons';
import LogoIcon from '../../components/logo';
import { useSelector } from 'react-redux';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const Side = () => {
  const id = useSelector((state: any) => state.app.userId);
  const currentPage = useSelector((state: any) => state.app.currentPage);
  const screens = useBreakpoint();
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  return !screens.sm ? (
    <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['profile']}
        activeKey={currentPage}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" title={<LogoIcon/>}>
          <Menu.Item key="profile">
            <Link to={`/content/profile/${id}`}> {t('side.profile')}</Link>
          </Menu.Item>
          <Menu.Item key="messenger">
            <Link to={'/content/messenger'}>{t('side.mess')}</Link>
          </Menu.Item>
          <Menu.Item key="news">
            <Link to={'/content/news'}> {t('side.news')}</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
  ) : (
    <Sider
      breakpoint="xl"
      onBreakpoint={() => {
        setCollapsed(collapsed);
      }}
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <LogoIcon />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item icon={<UserOutlined />} key="1">
          <Link to={`/content/profile/${id}`}> {t('side.profile')}</Link>
        </Menu.Item>
        <Menu.Item icon={<MessageOutlined />} key="2">
          <Link to={'/content/messenger'}>{t('side.mess')}</Link>
        </Menu.Item>
        <Menu.Item icon={<ContainerOutlined />} key="3">
          <Link to={'/content/news'}> {t('side.news')}</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Side;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Layout, Button, Input, Dropdown, Avatar, Row, Col, Grid, Menu, Space, Image } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { authActions, appActions } from '../../redux/actions';
import Language from '../../components/language';

import './style.scss';
import { Link } from 'react-router-dom';
import { loadUserData } from '../../redux/actions/user';

const { signOut } = authActions;
const { searchUser, changeUser } = appActions;
const { useBreakpoint } = Grid;

const Header = () => {
  const screens = useBreakpoint();
  const listData = useSelector((state: any) => state.app.searchList);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { Header } = Layout;
  const { Search } = Input;

  const logOutHeandler = () => {
    dispatch(signOut());
  };

  const onSearch = (value: string): void => {
    dispatch(searchUser(value.toLowerCase()));
  };

  return (
    <Header style={!screens.sm ? { height: '100%' } : {}} className="header">
      <Row style={{ width: '100%' }} gutter={[24, 1]} align="middle">
        <Col xs={24} sm={12} md={14} lg={14} xl={14} xxl={16}>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
                {!listData ? (
                  <div>{t('header.notFound')}</div>
                ) : (
                  listData.map((item: any) => {
                    return (
                      <Menu.Item key={item.id}>
                        <Link to={`/content/profile/${item.id}`}>
                          <Space>
                            <Avatar src={<Image src={item.avatar} />} />
                            <span>{item.firstName}</span>
                            <span>{item.lastName}</span>
                          </Space>
                        </Link>
                      </Menu.Item>
                    );
                  })
                )}
              </Menu>
            }
          >
            <Search
              style={{ margin: '16px 0', lineHeight: '0', maxWidth: '1000px' }}
              placeholder={t('header.search')}
              loading={false}
              onSearch={onSearch}
              enterButton
            />
          </Dropdown>
        </Col>
        <Col>
          <Button onClick={logOutHeandler}>{t('header.button')}</Button>
        </Col>
        <Col>
          <Language color="white" />
        </Col>
      </Row>
    </Header>
  );
};

export default Header;

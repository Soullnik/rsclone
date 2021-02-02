import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Layout, Button, Space, Input, Dropdown, List, Avatar, Row, Col, Grid, Menu } from 'antd';
import { authActions, appActions } from '../../redux/actions';
import Language from '../../components/language';

import './style.scss';

const { signOut } = authActions;
const { searchUser } = appActions;
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
                <Menu.Item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
                  </a>
                </Menu.Item>
                <Menu.Item danger>a danger item</Menu.Item>
              </Menu>
              // <List
              //   itemLayout="vertical"
              //   size="large"
              //   dataSource={listData}
              //   renderItem={(item: any) => (
              //     <List.Item key={item.id}>
              //       <div>{item.firstName}</div>
              //     </List.Item>
              //   )}
              // />
            }
          >
            <Search
              style={{ margin: '16px 0', lineHeight: '0', maxWidth: '1000px' }}
              placeholder="input first name or seconde name user"
              loading={false}
              onSearch={onSearch}
              enterButton
            />
          </Dropdown>
        </Col>
        <Col>
          <Button onClick={logOutHeandler}>LOG OUT</Button>
        </Col>
        <Col>
          <Language color="white" />
        </Col>
      </Row>
    </Header>
  );
};

export default Header;

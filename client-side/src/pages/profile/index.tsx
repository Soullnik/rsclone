import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {
  PageHeader,
  Col,
  Row,
  Spin,
  Typography,
  Card,
  Divider,
  Form,
  Avatar,
  DatePicker,
  Button,
  Space,
  Select,
} from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, messangerActions } from '../../redux/actions';
import { capitalize } from '../../utils/helpers';
import { useTranslation } from 'react-i18next';

import PostContainer from '../../components/postsContainer';
import PicturesWall from '../../components/picturesWall';
import ProfileAvatar from '../../components/avatar';

import './style.scss';

const { changeUserProfileInfo, addFriend } = userActions;
const { sendMessage } = messangerActions;
const { Paragraph } = Typography;
const { Meta } = Card;

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const friends = useSelector((state: any) => state.user.friends);
  const editable = useSelector((state: any) => state.user.editable);
  const loading = useSelector((state: any) => state.user.loading);
  const userId = useSelector((state: any) => state.app.userId);
  const currentId = useSelector((state: any) => state.app.currentUser);
  const profileData = useSelector((state: { user: any }) => state.user.profile);

  const [friendButton, setFriendButton] = useState(true);

  const onChangeInfoHandler = (value: any, type: any) => {
    dispatch(changeUserProfileInfo({ value, type, userId }));
  };

  if (!loading) {
    return (
      <Row style={{ marginRight: '0', marginLeft: '0' }} className="profile" wrap gutter={[16, 16]}>
        <Col className="profile__aside" xs={24} sm={24} md={8} lg={8} xl={6} xxl={6}>
          <Card
            headStyle={{ backgroundColor: '#001529', color: 'white' }}
            title={t('content.friends')}
            loading={false}
          >
            {friends.map((item: any) => {
              return (
                <Link to={`/content/profile/${item.id}`} key={item.id}>
                  <Card.Grid className="friend-card">
                    <Meta avatar={<Avatar src={item.avatar} />} title={item.firstName} />
                  </Card.Grid>
                </Link>
              );
            })}
          </Card>
        </Col>
        <Col className="profile__info" xs={24} sm={24} md={16} lg={16} xl={12} xxl={10}>
          <PageHeader
            title={`${capitalize(profileData.firstName)} ${capitalize(profileData.lastName)}`}
          />
          <Row wrap gutter={[16, 16]}>
            <Col
              style={{ minHeight: '300px', margin: '0 auto' }}
              xs={24}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              xxl={10}
            >
              <Space direction="vertical">
                <ProfileAvatar url={profileData.avatar} />
                {editable || (
                  <React.Fragment>
                    {!(friends.findIndex((item: any) => item.id == userId) + 1) && friendButton && (
                      <Button
                        onClick={() => {
                          setFriendButton(false);
                          dispatch(addFriend({ currentId, userId }));
                        }}
                      >
                        {t('content.addFriend')}
                      </Button>
                    )}
                    <Button
                      onClick={() => {
                        dispatch(sendMessage({ currentId, userId }));
                      }}
                    >
                      {t('content.send')}
                    </Button>
                  </React.Fragment>
                )}
              </Space>
            </Col>
            <Col xs={24} sm={14} md={14} lg={14} xl={14} xxl={14}>
              <Divider orientation="right" plain>
                {t('content.info')}
              </Divider>
              <Form>
                <Form.Item label={t('content.profile.age')}>
                  <DatePicker
                    disabled={!editable}
                    value={profileData.age ? moment(profileData.age.toDate(), 'DD/MM/YYYY') : null}
                    bordered={false}
                    onChange={(date: any) => {
                      onChangeInfoHandler(
                        date
                          ? firebase.firestore.Timestamp.fromDate(new Date(date.format()))
                          : null,
                        'age'
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item label={t('content.profile.gender')}>
                  <Select
                    value={profileData.gender}
                    style={{ width: 120 }}
                    bordered={false}
                    disabled={!editable}
                    onSelect={(value: any) => {
                      onChangeInfoHandler(value, 'gender');
                    }}
                  >
                    <Select.Option value="male">{t('auth.signup.gender.male')}</Select.Option>
                    <Select.Option value="female">{t('auth.signup.gender.female')}</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label={t('content.profile.city')}>
                  <Paragraph
                    editable={
                      editable && {
                        onChange: (value) => {
                          onChangeInfoHandler(value, 'city');
                        },
                      }
                    }
                  >
                    {profileData.city || ''}
                  </Paragraph>
                </Form.Item>
                <Form.Item label={t('content.profile.about')}>
                  <Paragraph
                    editable={
                      editable && {
                        onChange: (value) => {
                          onChangeInfoHandler(value, 'about');
                        },
                      }
                    }
                  >
                    {profileData.about || ''}
                  </Paragraph>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <div>
            <Divider orientation="right" plain>
              {t('content.postFrom.title')}
            </Divider>
            <PostContainer />
          </div>
        </Col>
        <Col className="profile__gallery" xs={24} sm={24} md={24} lg={24} xl={6} xxl={8}>
          <PicturesWall />
        </Col>
      </Row>
    );
  } else {
    return <Spin style={{ margin: 'auto' }} size="large" />;
  }
};

export default Profile;

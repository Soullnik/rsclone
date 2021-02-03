import React, { useState } from 'react';
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
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/actions';
import { capitalize } from '../../utils/helpers';
import PostsForm from '../../components/postForm';
import PicturesWall from '../../components/picturesWall';
import ProfileAvatar from '../../components/avatar';
import Posts from '../../components/postsList';

import './style.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';

const { changeUserProfile, sendMessage, addFriend } = userActions;
const { Paragraph } = Typography;
const { Meta } = Card;

const Profile: React.FC = () => {
  const dispath = useDispatch();
  const currentFriends = useSelector((state: any) => state.user.currentFriends);
  const friends = useSelector((state: any) => state.user.friends);
  const editable = useSelector((state: any) => state.user.editable);
  const loading = useSelector((state: any) => state.user.loading);
  const userId = useSelector((state: any) => state.app.userId);
  const currnetId = useSelector((state: any) => state.app.currnetUser);
  const profileData = useSelector((state: { user: any }) => state.user.profile);

  const [friendButton, setFriendButton] = useState(true)

  const changeData = (value: any, type: any) => {
    dispath(changeUserProfile({ value, type, userId }));
  };

  if (!loading) {
    return (
      <Row style={{ marginRight: '0', marginLeft: '0' }} className="profile" wrap gutter={[16, 16]}>
        <Col className="profile__aside" xs={24} sm={24} md={8} lg={8} xl={6} xxl={6}>
          <Card
            headStyle={{ backgroundColor: '#001529', color: 'white' }}
            title="Друзья"
            loading={false}
          >
            {currentFriends.map((item: any) => {
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
              xs={12}
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
                    {!(friends.findIndex((item: any) => item.id == currnetId) + 1) && friendButton && (
                      <Button
                        onClick={() => {
                          setFriendButton(false)
                          dispath(addFriend({ currnetId, userId }));
                        }}
                      >
                        add to friends
                      </Button>
                    )}
                    <Button
                      onClick={() => {
                        dispath(sendMessage({ currnetId, userId }));
                      }}
                    >
                      send message
                    </Button>
                  </React.Fragment>
                )}
              </Space>
            </Col>
            <Col xs={24} sm={14} md={14} lg={14} xl={14} xxl={14}>
              <Divider orientation="right" plain>
                information
              </Divider>
              <Form>
                <Form.Item label="дата рождения">
                  <DatePicker
                    disabled={!editable}
                    value={profileData.age ? moment(profileData.age.toDate(), 'DD/MM/YYYY') : null}
                    bordered={false}
                    onChange={(date: any, dateString: string) => {
                      changeData(
                        date
                          ? firebase.firestore.Timestamp.fromDate(new Date(date.format()))
                          : null,
                        'age'
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item label="Пол">
                  <Paragraph
                    editable={
                      editable && {
                        onChange: (value) => {
                          const val = value;
                          changeData(val, 'gender');
                        },
                      }
                    }
                  >
                    {profileData.gender || ''}
                  </Paragraph>
                </Form.Item>
                <Form.Item label="Текуший город">
                  <Paragraph
                    editable={
                      editable && {
                        onChange: (value) => {
                          const val = value;
                          changeData(val, 'city');
                        },
                      }
                    }
                  >
                    {profileData.city || ''}
                  </Paragraph>
                </Form.Item>
                <Form.Item label="обо мне">
                  <Paragraph
                    editable={
                      editable && {
                        onChange: (value) => {
                          const val = value;
                          changeData(val, 'about');
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
              Posts
            </Divider>
            <Posts />
            {editable ? <PostsForm /> : ''}
          </div>
        </Col>
        <Col className="profile__gallery" xs={24} sm={24} md={24} lg={24} xl={6} xxl={8}>
          <PicturesWall />
        </Col>
      </Row>
    );
  } else {
    return <Spin size="large" />;
  }
};

export default Profile;

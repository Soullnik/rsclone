import React, { useState } from 'react';
import { Modal, Row, Col } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import PicturesWall from '../picturesWall';
import { useTranslation } from 'react-i18next';
import './style.scss';
import { useSelector } from 'react-redux';

const ProfileAvatar = ({ url }: any) => {
  const { t } = useTranslation();
  const img = useSelector((state: { user: any }) => state.user.profile.avatar);
  const [loading, setLoading] = useState(false);
  const [visible, setvisible] = useState(false);

  const uploadButton = (
    <div
      className="upload-button"
      onClick={() => {
        setvisible(true);
      }}
    >
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginTop: 8 }}>{t('content.avatar')}</div>
        </div>
      )}
    </div>
  );

  const handleOk = () => {
    setvisible(false);
  };

  const handleCancel = () => {
    setvisible(false);
  };

  return (
    <div className="avatar">
      {img  ? <img src={img} alt="avatar" /> : uploadButton}
    </div>
  );
};

export default ProfileAvatar;

import React, { useState } from 'react';
import { Upload, Modal, Button } from 'antd';
import { PlusOutlined, FullscreenExitOutlined } from '@ant-design/icons/lib';
import { beforeUpload, dummyRequest } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  uploadUserData,
  deleteUserData,
  postUserAvatar,
  setImageData,
} from '../../redux/actions/user';

const PicturesWall = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setpreviewImage] = useState('');
  const id = useSelector((state: any) => state.app.userId);
  const pictures = useSelector((state: { user: any }) => state.user.images);
  const editable = useSelector((state: any) => state.user.editable);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">{t('content.picture.upload')}</div>
    </div>
  );

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = (file: any) => {
    setpreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
  };

 

  const handleChange = (info: any) => {
    dispatch(setImageData(info.fileList));
    if (info.file.status === 'done') {
      dispatch(uploadUserData({ file: info.file.originFileObj, id }));
    }
  };

  const handleRemove = (info: any) => {
    dispatch(setImageData(info.fileList));
    dispatch(deleteUserData({ name: info.name, id }));
  };

  const handleGetAvatar = (src: any) => {
    dispatch(postUserAvatar({ value: src, id, type: 'avatar' }));
    setPreviewVisible(false);
  };

  return (
    <div className="clearfix">
      <Upload
        listType="picture-card"
        fileList={pictures}
        customRequest={dummyRequest}
        beforeUpload={beforeUpload}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={editable && handleRemove}
      >
        {editable ? uploadButton : null}
      </Upload>
      <Modal
        title={
          editable && (
            <Button
              onClick={() => {
                handleGetAvatar(previewImage);
              }}
            >
              {t('content.picture.choice')}
            </Button>
          )
        }
        footer={''}
        visible={previewVisible}
        closeIcon={<FullscreenExitOutlined />}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default PicturesWall;

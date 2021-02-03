import React, { useState } from 'react';
import { Upload, Modal, Button } from 'antd';
import { PlusOutlined, FullscreenExitOutlined } from '@ant-design/icons/lib';
import { beforeUpload, dummyRequest } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { uploadUserData, deleteUserData, postUserAvatar } from '../../redux/actions/user';


const PicturesWall = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setpreviewImage] = useState('')
  const id = useSelector((state: any) => state.app.userId);
  const pictures = useSelector((state: { user: any }) => state.user.images);
  const editable = useSelector((state: any) => state.user.editable);

  
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = (file: any) => {
    setpreviewImage(file.url || file.thumbUrl)
    setPreviewVisible(true)
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      dispatch(uploadUserData({file: info.file.originFileObj, id}))
    }
  };

  const handleRemove = (info: any) => {
    dispatch(deleteUserData({name: info.name, id}))
  };

  const handleGetAvatar = (src:any) => {
    dispatch(postUserAvatar({src, id}))
    setPreviewVisible(false)
  }

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
      <Modal title={editable && <Button onClick={() => { handleGetAvatar(previewImage)}}>Сделать аватаром</Button>} footer={''}  visible={previewVisible} closeIcon={<FullscreenExitOutlined />} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );

};

export default PicturesWall;

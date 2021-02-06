import React from 'react';
import { Form, Button, Input } from 'antd';

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value, buttonTitle } : any) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        {buttonTitle}
      </Button>
    </Form.Item>
  </>
);

export default Editor
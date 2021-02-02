import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';


const Language = (props: any) => {
  const { t, i18n } = useTranslation();
  const {className, color} = props

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const menu = (
    <Menu>
      <Menu.Item key="en" onClick={() => handleClick('en')}>
        En
      </Menu.Item>
      <Menu.Item key="ru" onClick={() => handleClick('ru')}>
        Ru
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className={className} overlay={menu} trigger={['hover']} placement="bottomCenter">
      <div style={{ lineHeight: '0', color: `${color}`, cursor: 'pointer', minWidth: '50px' }}>
        <GlobalOutlined style={{ marginRight: '3px' }} />
        <span style={{ userSelect: 'none' }}>{t('lang')}</span>
      </div>
    </Dropdown>
  );
};

export default Language;

import React from 'react';
import Title from 'antd/lib/typography/Title';
import { Grid } from 'antd';
import './Logo.scss';

const { useBreakpoint } = Grid;

const LogoIcon = () => {
  const screens = useBreakpoint();
  const mobileStyle = {
    color: 'white',
    margin: 'auto',
  };
  return (
    <Title className="logo" style={!screens.sm ? mobileStyle : {color: 'white'}} level={3}>
      {!screens.xl ? 'SNET' : 'SOCIALNET'}
    </Title>
  );
};

export default LogoIcon;

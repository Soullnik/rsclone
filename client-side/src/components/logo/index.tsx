import React from 'react';
import Title from 'antd/lib/typography/Title';
import { Grid } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';

const { useBreakpoint } = Grid;

const LogoIcon = () => {
  const id = useSelector((state: any) => state.app.userId);
  const screens = useBreakpoint();
  const mobileStyle = {
    color: 'white',
    margin: 'auto',
  };
  return (
    <Link to={`/content/profile/${id}`}>
      <Title className="logo" style={!screens.sm ? mobileStyle : { color: 'white' }} level={3}>
        {!screens.xl ? 'SNET' : 'SOCIALNET'}
      </Title>
    </Link>
  );
};

export default LogoIcon;

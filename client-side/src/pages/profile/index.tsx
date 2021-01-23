import { PageHeader } from 'antd';
import React, { useContext } from 'react';
import dataContext from '../../context';

import './style.scss';

type Props = {};

const Profile: React.FC<Props> = () => {
  const { state } = useContext(dataContext);
  const firstName = state?.user?.profile.firstName;
  const lastName = state?.user?.profile.lastName
  const age = state?.user?.profile.age
  return <PageHeader title={`${firstName} ${lastName}`} subTitle={`He is ${age} years`} />;
};

export default Profile;

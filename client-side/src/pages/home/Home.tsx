import React from 'react'
import { useTranslation } from 'react-i18next';
import { Card } from 'antd';
import LogoIcon from '../../shared/icons/LogoIcon';
import Header from '../../layout/header';
// import Item from '../../shared/components/Item';

import './Home.scss';

type Props = {};

const Home: React.FC<Props> = () => {
  const { t } = useTranslation('homeScreen');

  return (
    <>
      <Header />
      <div className="home">
        <Card
          className="home__card"
          title={t('title')}
          extra={
            <LogoIcon fill="#3f51b5" />
          }
        >
         {/* <Item item="sdfsd" />  */}
        </Card>
      </div>
    </>
  );
};

export default Home;
import React from 'react';
import styles from './index.css';
import { Helmet } from 'react-helmet';
import ico from '../assets/cong.png';
// import ico from '../assets/favico32.ico';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>HCM_薪酬模块_test</h1>
      {props.children}
      <Helmet>
        <title>HCM</title>
        <link rel="shortcut icon" href={ico} type="image/vnd.microsoft.icon" />
        <link rel="icon" href={ico} type="image/vnd.microsoft.icon" />
      </Helmet>
    </div>
  );
};

export default BasicLayout;

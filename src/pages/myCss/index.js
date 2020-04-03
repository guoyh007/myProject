import React, { Component } from 'react';
import styles from './index.less';

function name(params) {
  return (
    <>
      <div className={styles.circleContainer}>
        1/2圆: <div></div>
        1/4圆: <div></div>
        1/2圆:  <div></div>
        1/4圆: <div></div>
      </div>

      BFC:
      <div className={styles.container}>
        <div className={styles.inner}></div>
      </div>
    </>
  );
}

export default name;

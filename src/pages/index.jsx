import React from 'react';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
import Demo from './Demo';

export default function() {
  return (
    <div className={styles.normal}>
      <Demo />
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({
              id: 'index.start',
            })}
          </a>
        </li>
      </ul>

      <div className={styles.container}>FUCK ! 费堃xxxx</div>
    </div>
  );
}

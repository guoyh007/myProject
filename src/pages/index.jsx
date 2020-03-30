import React from 'react';
// import Blockly from 'blockly';

import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
// import Demo from './Demo';

function Container() {

  return (
    <div className={styles.normal}>
      {/* <Demo /> */}
      {/* {Blockly.inject('blocklyDiv', <div/>)} */}

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

      <div className={styles.Container}>FUCK ! xxxx</div>
    </div>
  );
}

export default Container;
// export default Blockly.inject('blocklyDiv', Container);

import React, { useCallback } from 'react';
// import {router} from 'dva';
import { router } from 'umi'
import styles from './index.css'

function Memu(params) {
  const list = [
    {
      key: 1,
      label: 'Home',
      route: '/'
    },
    {
      key: 2,
      label: 'Demo',
      route: '/Demo'
    },
    {
      key: 3,
      label: 'Css',
      route: '/myCss'
    },
    {
      key: 4,
      label: 'text',
      route: '/myTest'
    },
  ];

  const changeRouter= useCallback((route) =>{
    router.push(route);
  }, [])

  return(<>
    {list.map((item) => {
      const {key, label, route } = item;
      return <span key={key} onClick={()=> changeRouter(route)} className={styles.menu}>{label}</span>
    })}
  </>)
}

export default Memu

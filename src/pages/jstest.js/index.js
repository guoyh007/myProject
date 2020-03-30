import React, { useCallback, useState } from 'react';

import { Button } from 'antd';
import styles from './index.less';

function JS(params) {
  const [num,setNum] = useState(1);

  const click = useCallback(()=>{
    const num2 = num + 1 ;
    setNum(num2);
  }, [num])

  return(
    <>
      <div className={styles.drag} draggable>draggable</div>
      <p>{num}</p>
      <Button className={styles.container} onClick={click}>Hello UmiJS!</Button>
    </>
  )
}

export default JS;

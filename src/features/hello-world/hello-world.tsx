import styles from './hello-world.module.css';

import { FC } from 'react';

const HelloWorld: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Next TS starter</h1>
      <p>Hello world</p>
    </main>
  );
};

export default HelloWorld;

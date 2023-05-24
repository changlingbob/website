import * as React from 'react';

import styles from './index.module.scss';

export const Page: React.FC = () => {
  console.log('index');

  return <div className={styles.content}>I am a small yellow fish</div>;
};

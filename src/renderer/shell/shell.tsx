import * as React from 'react';

import { PageContext } from '@renderer/types';

import styles from './shell.module.scss';

export type IShellProps = React.PropsWithChildren<{
  pageContext: PageContext;
}>;

export const Shell: React.FC<IShellProps> = ({ children, pageContext }) => {
  console.log('hi');

  return (
    <div className={styles.content}>
      TITLE LOL
      <br />
      {children}
    </div>
  );
};

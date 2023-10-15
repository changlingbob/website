import * as React from 'react';

import styles from './footer.module.scss';
import classNames from 'classnames';

export interface IFooterProps {
  className?: string;
  msg: string;
}

export const Footer: React.FC<IFooterProps> = ({ className, msg }) => (
  <div className={classNames(className, styles.footer)}>
    <div className={styles.msg}>{msg}</div>
    <div className={styles.hash}>{APP_CONFIG.GIT_HASH}</div>
  </div>
);

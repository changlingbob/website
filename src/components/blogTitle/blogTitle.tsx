import * as React from 'react';

import styles from './blogTitle.module.scss';
import classNames from 'classnames';

export interface IBlogTitleProps {
  className?: string;
  date: string;
  title: string;
}

export const BlogTitle: React.FC<IBlogTitleProps> = ({
  className,
  date,
  title,
}) => (
  <div className={classNames(className, styles.header)}>
    <div className={styles.title}>{title}</div>
    <div className={styles.date}>{date}</div>
  </div>
);

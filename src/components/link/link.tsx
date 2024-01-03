import * as React from 'react';

import styles from './link.module.scss';
import classNames from 'classnames';

export interface ILinkProps {
  className?: string;
  href: string;
}

export const Link: React.FC<React.PropsWithChildren<ILinkProps>> = ({
  className,
  href,
  children,
}) => (
  <a
    className={classNames(className, styles.link)}
    href={`${APP_CONFIG.BASE_URL}${href === '/' ? '' : href}`}
  >
    {children}
  </a>
);

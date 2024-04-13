import * as React from 'react';

import 'normalize.css';

import { Footer } from '@components/footer/footer';
import { Header } from '@components/header';
import { Menu } from '@components/menu';
import { PageContext } from '@renderer/types';

import styles from './shell.module.scss';

export type IShellProps = React.PropsWithChildren<{
  pageContext: PageContext;
}>;

export const Shell: React.FC<IShellProps> = ({ children, pageContext }) => (
  <div className={styles.shell}>
    <Header
      className={styles.header}
      title={'TITLE'}
      icon={'images/logo.png'}
      pageProps={pageContext.pageProps}
    />
    <Menu className={styles.menu} />
    <div className={styles.page}>{children}</div>
    <Footer className={styles.footer} msg={'footer'} />
  </div>
);

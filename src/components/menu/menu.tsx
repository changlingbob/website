import * as React from 'react';

import styles from './menu.module.scss';
import classNames from 'classnames';
import { PageProps } from '@renderer/types';
import { blogSlug, blogs, pageMap } from '@utils';

export interface IMenuProps {
  className?: string;
  closeFunc?: () => void;
  pageProps?: PageProps;
}

export const Menu = React.forwardRef<HTMLDivElement, IMenuProps>(
  ({ className, closeFunc, pageProps, ...rest }, ref) => {
    console.log('menu content', pageMap, pageProps?.blog);
    const render = (key: string) => {
      switch (key) {
        case 'Blog':
          return (
            <React.Fragment key={pageMap[key]}>
              <a href={`/${pageMap[key]}`}>{key}</a>
              <br />
              {pageProps?.blog && (
                <ul>
                  {blogs.map((blog) => (
                    <li key={blog.date + blog.title}>
                      <a href={`/blog/${blogSlug(blog)}`}>{blog.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          );
        default:
          return (
            <React.Fragment key={pageMap[key]}>
              <a href={`/${pageMap[key]}`}>{key}</a>
              <br />
            </React.Fragment>
          );
      }
    };

    return (
      <div ref={ref} className={classNames(className, styles.menu)} {...rest}>
        <div className={styles.header}>
          {closeFunc && <button onClick={closeFunc}>X</button>}
        </div>
        {Object.keys(pageMap)
          .filter((key) => key.search('@') < 0)
          .sort((a, b) =>
            a === 'Home' ? -1 : b === 'Home' ? 1 : a.localeCompare(b)
          )
          .map(render)}
      </div>
    );
  }
);

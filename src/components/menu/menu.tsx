import * as React from 'react';

import { Link } from '@components/link/link';
import { IBlog } from '@renderer/blog.types';
import { PageContextState } from '@renderer/context';
import { PageProps } from '@renderer/types';
import { blogs, blogSlug, IMenuLink, menuKeys } from '@utils';

import styles from './menu.module.scss';
import classNames from 'classnames';

export interface IMenuProps {
  className?: string;
  closeFunc?: () => void;
  pageProps?: PageProps;
}

export const Menu = React.forwardRef<HTMLDivElement, IMenuProps>(
  ({ className, closeFunc, ...rest }, ref) => {
    const { pageProps, urlPathname } = React.useContext(PageContextState);

    const render = (link: IMenuLink) => {
      switch (link.url) {
        case 'blog':
          return (
            <React.Fragment key={link.url}>
              <Link href={`${link.url}`}>{link.link}</Link>
              <br />
              {pageProps?.blog && (
                <ul>
                  {blogs.map(
                    (blog: IBlog) =>
                      new Date(blog.date).getTime() < new Date().getTime() && (
                        <li key={blog.date + blog.title}>
                          <Link href={`blog/${blogSlug(blog)}`}>
                            {blog.title}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              )}
            </React.Fragment>
          );
        default:
          return (
            <React.Fragment key={link.url}>
              <Link href={`${link.url}`}>{link.link}</Link>
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
        {menuKeys(urlPathname.split('/')[1]).map(render)}
      </div>
    );
  }
);

Menu.displayName = 'Menu';

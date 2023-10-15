import * as React from 'react';

import { Menu } from '@components/menu';

import styles from './header.module.scss';
import classNames from 'classnames';

export interface IHeaderProps {
  className?: string;
  icon?: string;
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ className, icon, title }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [slideMenu, setSlideMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const menuTransitionEnd = () => {
    setShowMenu(false);
    menuRef.current?.removeEventListener('transitionend', menuTransitionEnd);
  };
  const hamburger = () => {
    if (!slideMenu) {
      setShowMenu(true);
      setTimeout(() => setSlideMenu(true), 0);
    } else {
      setSlideMenu(false);
      menuRef.current?.addEventListener('transitionend', menuTransitionEnd);
    }
  };

  return (
    <div className={classNames(className, styles.header)}>
      {icon && <img src={`${import.meta.env.BASE_URL}${icon}`} />}
      <div className={styles.title}>{title}</div>
      <button onClick={hamburger} className={styles.hamburger}>
        {'\u276E'}
      </button>
      <div
        data-show={showMenu ? 'true' : 'false'}
        className={styles.container}
        // onClick={hamburger}
      >
        <div className={styles.dismiss} onClick={hamburger} />
        <Menu
          data-slide={slideMenu ? 'true' : 'false'}
          className={styles.menu}
          closeFunc={hamburger}
          ref={menuRef}
        />
      </div>
    </div>
  );
};

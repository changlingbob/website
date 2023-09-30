import * as React from 'react';

import styles from './menu.module.scss';
import classNames from 'classnames';

export interface IMenuProps {
  className?: string;
  closeFunc?: () => void;
}

export const Menu = React.forwardRef<HTMLDivElement, IMenuProps>(
  ({ className, closeFunc, ...rest }, ref) => (
    <div ref={ref} className={classNames(className, styles.menu)} {...rest}>
      <div className={styles.header}>
        {closeFunc && <button onClick={closeFunc}>X</button>}
      </div>
      menu
    </div>
  )
);

Menu.displayName = 'Menu';

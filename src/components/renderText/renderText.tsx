import * as React from 'react';

import styles from './renderText.module.scss';
import classNames from 'classnames';

export interface IRenderTextProps {
  className?: string;
  cssVar?: { [index: string]: string };
  text: string;
}

export const RenderText: React.FC<IRenderTextProps> = ({
  className,
  cssVar,
  text,
}) => {
  if (text[0] === '#') {
    return <h1>{text.slice(2)}</h1>;
  }

  const fragments = text.split('`');
  const output: React.ReactNode[] = [];
  fragments.forEach((fragment, index) =>
    output.push(
      index % 2 ? (
        <span className={styles.mono}>{fragment}</span>
      ) : (
        <>{fragment}</>
      )
    )
  );

  return (
    <div className={classNames(className)} style={cssVar}>
      {output}
    </div>
  );
};

import React from 'react';

export const parseText = (
  text: string,
  styles: CSSModuleClasses
): React.ReactNode[] => {
  const output: React.ReactNode[] = [];

  const fragments = text.split('`');
  fragments.forEach((fragment, index) =>
    output.push(
      index % 2 ? (
        <span className={styles.mono} key={index}>
          {fragment}
        </span>
      ) : (
        <React.Fragment key={index}>{fragment}</React.Fragment>
      )
    )
  );

  return output;
};

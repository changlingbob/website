import * as React from 'react';

import { Image } from '@components/image';

import styles from './standardPage.module.scss';
import classNames from 'classnames';

export interface IStandardPageProps {
  className?: string;
  content: string[];
}

export const StandardPage: React.FC<IStandardPageProps> = ({
  className,
  content,
}) => {
  const text: string[] = [];
  const images: { [index: number]: string } = {};
  content.forEach((entry) => {
    if (entry[0] === '@') {
      images[text.length] = entry;
    } else {
      text.push(entry);
    }
  });

  const createCssVars = (index: number) => {
    const imagePosition = Object.keys(images).indexOf(String(index));
    let end;
    if (imagePosition === Object.keys(images).length - 1) {
      end = text.length;
    } else {
      end = +Object.keys(images)[imagePosition + 1];
    }

    return {
      '--grid-start': String(index + 1),
      '--grid-end': String(end + 1),
    };
  };

  return (
    <div className={classNames(className, styles.content)}>
      {text.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={classNames(styles.text)}
            style={{ '--grid-row': String(index + 1) } as React.CSSProperties}
          >
            {item}
          </div>
          {images[index] && (
            <Image
              className={classNames(styles.image)}
              image={images[index]}
              cssVar={createCssVars(index)}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

import * as React from 'react';

import { BlogTitle } from '@components/blogTitle';
import { Image } from '@components/image';
import { RenderText } from '@components/renderText';

import styles from './standardPage.module.scss';
import classNames from 'classnames';

export interface IStandardPageProps {
  className?: string;
  content: string[];
  date: string;
  title: string;
}

export const StandardPage: React.FC<IStandardPageProps> = ({
  className,
  content,
  date,
  title,
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
      '--grid-start': String(index + (index === 0 ? 1 : 2)),
      '--grid-end': String(end + 2),
    };
  };

  return (
    <div className={classNames(className, styles.content)}>
      {text.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <BlogTitle className={styles.header} date={date} title={title} />
          )}
          <RenderText
            className={classNames(styles.text)}
            cssVar={{ '--grid-row': String(index + 2) }}
            text={item}
          />
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

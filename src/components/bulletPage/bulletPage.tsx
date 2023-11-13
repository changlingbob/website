import * as React from 'react';

import { BlogTitle } from '@components/blogTitle';
import { Image } from '@components/image';
import { RenderText } from '@components/renderText';

import styles from './bulletPage.module.scss';
import classNames from 'classnames';

export interface IBulletPageProps {
  className?: string;
  content: string[];
  date: string;
  title: string;
}

export const BulletPage: React.FC<IBulletPageProps> = ({
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

  return (
    <div className={classNames(className, styles.content)}>
      {text.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <BlogTitle className={styles.header} date={date} title={title} />
          )}
          {images[index] && (
            <Image
              className={classNames(styles.image)}
              image={images[index]}
              cssVar={{ '--grid-row': String(index + 2) }}
            />
          )}
          <RenderText
            className={classNames(styles.text)}
            cssVar={{
              '--grid-column': String(images[index] ? 2 : 1),
              '--grid-row': String(index + 2),
            }}
            text={item}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

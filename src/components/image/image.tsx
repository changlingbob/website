import * as React from 'react';

import styles from './image.module.scss';
import classNames from 'classnames';

export interface IImageProps {
  className?: string;
  image: string;
  cssVar: { [index: string]: string };
}

export const Image: React.FC<IImageProps> = ({ className, cssVar, image }) => {
  const regex = image.match(/@(.*?):(.*?):(.*)/);
  if (regex !== null) {
    const [, file, caption, alt] = regex;

    return (
      <div className={classNames(className, styles.content)} style={cssVar}>
        <img src={`${import.meta.env.BASE_URL}blog/${file}`} alt={alt} />
        <label>{caption}</label>
      </div>
    );
  }

  return null;
};

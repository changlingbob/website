import * as React from 'react';

import { blogs, blogSlug } from '@utils';

export const Page: React.FC = () => {
  console.log('blogs!');

  return (
    <div className={'hi'}>
      <h1>blogs!</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blogSlug(blog)}>
            <a href={`blog/${blogSlug(blog)}`}>{blogSlug(blog)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const documentProps = {
  title: 'Blog',
  description: '',
};

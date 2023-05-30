import * as React from 'react';

import { blogs, blogSlug } from './content';

export const Page: React.FC = () => {
  console.log('blogs!');

  return (
    <div className={'hi'}>
      <h1>blogs!</h1>
      <li>
        {blogs.map((blog) => (
          <ul key={blogSlug(blog)}>
            <a href={`blog/${blogSlug(blog)}`}>{blog.title}</a>
          </ul>
        ))}
      </li>
    </div>
  );
};

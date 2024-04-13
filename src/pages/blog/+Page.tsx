import * as React from 'react';

import { Link } from '@components/link/link';
import { blogs, blogSlug } from '@utils';

export const Page: React.FC = () => {
  console.log('blogs!');

  return (
    <div className={'hi'}>
      <h1>blogs!</h1>
      <ul>
        {blogs.map(
          (blog) =>
            new Date(blog.date).getTime() < new Date().getTime() && (
              <li key={blogSlug(blog)}>
                <Link href={`blog/${blogSlug(blog)}`}>{blogSlug(blog)}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
export const documentProps = {
  title: 'Blog',
  description: '',
};

export const onBeforePrerenderStart = () =>
  blogs.map((blog) => {
    const url = `/blog/${blogSlug(blog)}`;

    return {
      url,
      pageContext: {
        title: 'hi',
        pageProps: {
          blog,
        },
      },
    };
  });

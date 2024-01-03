import * as React from 'react';

import { Link } from '@components/link/link';
import { blogs, blogSlug } from '@utils';
import { PageContextBuiltIn } from 'vike';

export const Page: React.FC = () => {
  console.log('blogs!');

  return (
    <div className={'hi'}>
      <h1>blogs!</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blogSlug(blog)}>
            <Link href={`blog/${blogSlug(blog)}`}>{blogSlug(blog)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const onBeforeRender = (pageContext: PageContextBuiltIn) => ({
  pageContext: {
    pageProps: {
      blog: true,
    },
  },
});

export const documentProps = {
  title: 'Blog',
  description: '',
};

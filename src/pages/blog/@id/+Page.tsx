import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';
import { StandardPage } from '@components/standardPage';
import { IBlog } from '@renderer/blog.types';
import { PageProps } from '@renderer/types';
import { redirect } from 'vike/abort';

export const Page = ({ blog }: { blog: IBlog }) => {
  console.log('blog contents:', blog);
  if (!blog) {
    throw redirect('/blog');
  }

  if (blog.type === 'standard') {
    return (
      <StandardPage
        content={blog.content}
        title={blog.title}
        date={blog.date}
      />
    );
  }

  if (blog.type === 'bullet') {
    return (
      <BulletPage content={blog.content} title={blog.title} date={blog.date} />
    );
  }

  return (
    <>
      <div>{blog.date}</div>
      <div>{blog.title}</div>
      {blog.content.map((item) => item)}
    </>
  );
};

export const getDocumentProps = (pageProps: PageProps) => ({
  title: pageProps.blog?.title,
  description: '',
});

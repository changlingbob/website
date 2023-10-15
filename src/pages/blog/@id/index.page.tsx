import * as React from 'react';

import { StandardPage } from '@components/standardPage';
import { IBlog } from '@renderer/blog.types';
import { PageProps } from '@renderer/types';
import { PageContextBuiltIn } from 'vike';

import { blogs, blogSlug } from '../content';

export const Page = ({ blog }: { blog: IBlog }) => {
  console.log(blog);

  if (blog.type === 'standard')
    return (
      <StandardPage
        content={blog.content}
        title={blog.title}
        date={blog.date}
      />
    );

  return (
    <>
      <div>{blog.date}</div>
      <div>{blog.title}</div>
      {blog.content.map((item) => item)}
    </>
  );
};

export const onBeforeRender = (pageContext: PageContextBuiltIn) => ({
  pageContext: {
    pageProps: {
      blog: blogs.find((item) => pageContext.routeParams.id === blogSlug(item)),
    },
  },
});

export const getDocumentProps = (pageProps: PageProps) => ({
  title: pageProps.blog?.title,
  description: '',
});

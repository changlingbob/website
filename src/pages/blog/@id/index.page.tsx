import * as React from 'react';

import { PageContextBuiltIn } from 'vike';

import { IBlog } from '../blog.types';
import { blogs, blogSlug } from '../content';

export const Page = ({ blog }: { blog: IBlog }) => {
  console.log(blog);

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

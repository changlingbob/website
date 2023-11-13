import { blogs, blogSlug } from '@utils';

export const prerender = () =>
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

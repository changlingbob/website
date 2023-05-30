import { blogs, blogSlug } from './content';

export const prerender = () =>
  blogs.map((blog) => {
    const url = `/blog/${blogSlug(blog)}`;

    return {
      url,
      pageContext: {
        pageProps: {
          blog,
        },
      },
    };
  });

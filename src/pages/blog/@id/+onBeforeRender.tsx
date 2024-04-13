import { blogs, blogSlug } from '@utils';
import { PageContextBuiltIn } from 'vike';

export const onBeforeRender = (pageContext: PageContextBuiltIn) => ({
  pageContext: {
    pageProps: {
      blog: blogs.find(
        (item) =>
          pageContext.routeParams.id.slice(0, 10) ===
          blogSlug(item).slice(0, 10)
      ),
    },
  },
});

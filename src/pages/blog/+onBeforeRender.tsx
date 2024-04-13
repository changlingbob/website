import { PageContextBuiltIn } from 'vike/types';

export const onBeforeRender = (pageContext: PageContextBuiltIn) => ({
  pageContext: {
    pageProps: {
      blog: true,
    },
  },
});

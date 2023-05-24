// See https://vite-plugin-ssr.com/data-fetching
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';

import { Shell } from './shell';
import type { PageContextServer } from './types';

export const passToClient = ['pageProps', 'urlPathname'];

export const render = async (pageContext: PageContextServer) => {
  const { Page, pageProps } = pageContext;

  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) {
    throw new Error('My render() hook expects pageContext.Page to be defined');
  }

  const pageHtml = ReactDOMServer.renderToString(
    <Shell pageContext={pageContext}>
      <Page {...pageProps} />
    </Shell>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc =
    (documentProps && documentProps.description) ||
    'App using Vite + vite-plugin-ssr';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
};

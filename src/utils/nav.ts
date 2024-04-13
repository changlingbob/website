import { IBlog } from '@renderer/blog.types';
import { Page } from '@renderer/types';

import { urlToLink } from './urls';

export interface IMenuLink {
  link: string;
  url: string;
  sub?: IMenuLink[];
  local?: boolean;
}

const makeMenuLink = (url: string): IMenuLink => ({
  link: urlToLink(url),
  url: url === 'index' ? '/' : url,
});

// DYNAMIC

const blogImport: Record<string, { default: IBlog }> = import.meta.glob(
  '../content/blogs/*',
  {
    eager: true,
  }
);

export const blogs = Object.values(blogImport)
  .map((item) => item.default)
  .sort((a, b) => b.date.localeCompare(a.date));

export const blogSlug = (article: IBlog) =>
  `${article.date}-${article.title
    .replace(/[^ a-zA-Z]/g, '')
    .replace(/ /g, '-')
    .slice(0, 28)}`;

// STATIC

const contentImport: Record<string, { Page: Page }> = import.meta.glob(
  '../pages/**/+Page.tsx',
  {
    eager: true,
  }
);

const sortOrder = ['home', 'blog', 'monster-manager'];
const menuSort = (a: string, b: string) => {
  const initial =
    sortOrder.indexOf(a.match(/^([^/]*)/)![0]) -
    sortOrder.indexOf(b.match(/^([^/]*)/)![0]);

  if (initial === 0) {
    if (sortOrder.indexOf(a) > -1) {
      return -1;
    }
    if (sortOrder.indexOf(b) > -1) {
      return 1;
    }

    return a.localeCompare(b);
  }

  return initial;
};

export const menuKeys = (local?: string): IMenuLink[] => {
  const pages = Object.keys(contentImport).map((file) => file.slice(9, -10));

  const links: IMenuLink[] = [];

  pages
    .filter((key) => key.search('@') < 0)
    .filter((key) => key.search('_') < 0)
    .sort((a, b) =>
      // eslint-disable-next-line no-nested-ternary -- sort logic
      a === '/' ? -1 : b === '/' ? 1 : menuSort(a, b)
    )
    .forEach((page) => {
      if (page.indexOf('/') <= 1) {
        const link = makeMenuLink(page);
        links.push(link);
        if (local && page.indexOf(local) > -1) {
          link.local = true;
        }
      } else {
        const urlParts = page.split('/');
        const parent = links.filter((link) => link.url === urlParts[0])[0];
        if (!parent.sub) {
          parent.sub = [];
        }
        parent.sub.push(makeMenuLink(page));
      }
    });

  return links;
};

import { IBlog } from '@renderer/blog.types';
import { Page } from '@renderer/types';
import { fileToLink, fileToUrl } from '@utils';

const blogImport: Record<string, { default: IBlog }> = import.meta.glob(
  '../content/blogs/*',
  {
    eager: true,
  }
);

export const blogs = Object.values(blogImport)
  .map((item) => item.default)
  .sort((a, b) => b.date.localeCompare(a.date));

export const blogSlug = (blog: IBlog) =>
  `${blog.date}-${blog.title
    .replace(/[^ a-zA-Z]/g, '')
    .replace(/ /g, '-')
    .slice(0, 28)}`;

const contentImport: Record<string, { Page: Page }> = import.meta.glob(
  '../pages/**/index.page.tsx',
  {
    eager: true,
  }
);

export const pageMap = (() => {
  const map: { [key: string]: string } = {};
  Object.keys(contentImport).forEach((key) => {
    map[fileToLink(key)] = fileToUrl(key);
  });

  return map;
})();

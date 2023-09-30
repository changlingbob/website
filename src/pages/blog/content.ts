import { IBlog } from './blog.types';

const blogImport: Record<string, { default: IBlog }> = import.meta.glob(
  '../../content/blogs/*',
  {
    eager: true,
  }
);

export const blogs = Object.values(blogImport).map((item) => item.default);

export const blogSlug = (blog: IBlog) =>
  `${blog.date}-${blog.title
    .replace(/[^ a-zA-Z]/g, '')
    .replace(/ /g, '-')
    .slice(0, 28)}`;

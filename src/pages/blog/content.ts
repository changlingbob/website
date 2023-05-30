import { IBlog } from './blog.types';

const imports: Record<string, { default: IBlog }> = import.meta.glob(
  '@blogs/*',
  {
    eager: true,
  }
);

export const blogs = Object.values(imports).map((item) => item.default);

export const blogSlug = (blog: IBlog) =>
  `${blog.date}-${blog.title
    .replace(/[^ a-zA-Z]/g, '')
    .replace(/ /g, '-')
    .slice(0, 28)}`;

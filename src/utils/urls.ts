export const urlToLink = (url: string) =>
  url
    .split('/')
    .slice(-1)[0]
    .split('-')
    .map((part) =>
      part !== 'index' ? part[0].toUpperCase() + part.slice(1) : 'Home'
    )
    .join(' ');

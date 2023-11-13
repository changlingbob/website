export const fileToLink = (file: string) => {
  const link = file
    .slice(9, -15)
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');

  return link === 'Index' ? 'Home' : link;
};

export const fileToUrl = (file: string) =>
  file.slice(9, -15) === 'index' ? '' : file.slice(9, -15);

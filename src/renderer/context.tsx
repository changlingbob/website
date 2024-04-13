import * as React from 'react';

import { PageContext } from './types';

export const PageContextState = React.createContext<PageContext>(
  {} as PageContext
);

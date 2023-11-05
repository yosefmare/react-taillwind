import { createContext } from 'react';
import { navbarContextsTypes } from '../interfaces';

const navContext = createContext<navbarContextsTypes>({
  viability: false,
  setViability: (): void => {},
});

export default navContext;

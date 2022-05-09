import { createContext } from 'react';
import data, { contextDataProps } from './data';

const UserContext = createContext<contextDataProps | null>(null);

type Props = {
  children: React.ReactElement;
};

export const UserContextProvider = ({ children }: Props) => {
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

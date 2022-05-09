import { createContext, useReducer } from 'react';
import data, { contextDataProps } from './data';
import reducer from './reducer';

const UserContext = createContext<ContextValue | undefined>(undefined);

type ContextValue = {
  state: contextDataProps;
  dispatch: typeof reducer;
};

type Props = {
  children: React.ReactElement;
};

export const UserContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

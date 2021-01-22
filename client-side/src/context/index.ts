import { createContext } from 'react';

interface ContextProps {
  state: {
    users: Array<IUser>;
  };
  dispatch: React.Dispatch<{ type: string; payload: any }>;
}

export default createContext<Partial<ContextProps>>({});

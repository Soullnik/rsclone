import { createContext } from 'react';
import { IReducerStates } from '../schemas/types';

interface ContextProps {
  state: IReducerStates
  dispatch: React.Dispatch<{ type: string; payload: any }>;
}

export default createContext<Partial<ContextProps>>({});

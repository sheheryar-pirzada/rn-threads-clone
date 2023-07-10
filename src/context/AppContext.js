import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { fakeUser } from '../utils/post.utils';

const fUser = fakeUser();

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [user, setUser] = useState(fUser);

  const userValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <AppContext.Provider value={userValue}>
      {children}
    </AppContext.Provider>
  );
}

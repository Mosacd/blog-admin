import { createContext, PropsWithChildren, useCallback, useState } from "react";

type User = {
  id?: string;
  email?: string;
  token: string;
} | null;

interface AuthContextType {
  user: User;
  handleSetUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  const handleSetUser = useCallback((user: User) => {
    setUser(user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};

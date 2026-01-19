import { createContext, useContext, useState } from "react";

type User = {
  id: string;
  role: string;
  name: string;
};

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (data: User) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
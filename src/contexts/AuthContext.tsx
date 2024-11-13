/* eslint-disable react-hooks/exhaustive-deps */
import { User } from "@/core/domain/entities/user";
import { useRouter } from "next/router";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextProps {
  user: User | null;
  token: string | null;
  saveToken: (e: string) => void;
  logout: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  saveToken: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { replace, pathname } = useRouter();

  const saveToken = (token: string) => {
    sessionStorage.setItem("accessToken", token);
    setToken(token);
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setToken(null);
    setUser(null);
  };

  const verify = async (token: string) => {};

  useEffect(() => {
    const getTokenSession = sessionStorage.getItem("accessToken");
    if (getTokenSession) {
      verify(getTokenSession);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

/* eslint-disable react-hooks/exhaustive-deps */
import { User } from "@/core/domain/entities/user";
import { UserGateway } from "@/core/infra/gateways/user-gateway";
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

  const saveToken = async (token: string) => {
    sessionStorage.setItem("accessToken", token);
    setToken(token);
    verify(token);
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setToken(null);
    setUser(null);
    replace("/");
  };

  const verify = async (token: string) => {
    try {
      const response = await UserGateway.verify(token);
      if (response.data) {
        setUser(response.data.data); // Salva o usuário no estado
      } else {
        logout();
      }
    } catch (error) {
      setUser(null); // Caso haja erro na verificação do token, o usuário é removido
      replace("/");
    }
  };

  useEffect(() => {
    const getTokenSession = sessionStorage.getItem("accessToken");

    if (getTokenSession) {
      saveToken(getTokenSession);
    } else {
      if (pathname.startsWith("/dashboard")) {
        replace("/");
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

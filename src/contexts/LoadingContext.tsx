/* eslint-disable react-hooks/exhaustive-deps */
import Loading from "@/components/loading";
import { useRouter } from "next/router";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface LoadingContextProps {
  onLoading: () => void;
  offLoading: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

const LoadingContext = createContext<LoadingContextProps>({
  onLoading: () => {},
  offLoading: () => {},
});

export const LoadingProvider: React.FC<ProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onLoading = () => {
    setLoading(true);
  };

  const offLoading = () => {
    setLoading(false);
  };

  //   useEffect(() => {
  //     const handleRouteChangeStart = () => {
  //       onLoading();
  //     };

  //     const handleRouteChangeComplete = () => {
  //       offLoading();
  //     };

  //     const handleRouteChangeError = () => {
  //       offLoading();
  //     };

  //     router.events.on("routeChangeStart", handleRouteChangeStart);
  //     router.events.on("routeChangeComplete", handleRouteChangeComplete);
  //     router.events.on("routeChangeError", handleRouteChangeError);

  //     return () => {
  //       router.events.off("routeChangeStart", handleRouteChangeStart);
  //       router.events.off("routeChangeComplete", handleRouteChangeComplete);
  //       router.events.off("routeChangeError", handleRouteChangeError);
  //     };
  //   }, [router.events]);

  return (
    <LoadingContext.Provider value={{ onLoading, offLoading }}>
      {children}
      {loading && <Loading />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

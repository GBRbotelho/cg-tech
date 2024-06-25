import React from "react";
import Navbar from "@/ui/components/layout/Navbar";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Header from "@/ui/components/layout/Header";
import NavbarSite from "@/ui/components/layout/NavbarSite";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Verificar se a rota é uma rota do dashboard
  const isDashboardRoute = router.pathname.startsWith("/dashboard");

  return (
    <>
      {isDashboardRoute ? (
        <main className="flex w-screen h-screen">
          <Navbar />
          <div className="w-full h-full">
            <Header />
            <Component {...pageProps} />
          </div>
        </main>
      ) : (
        <main className="flex flex-col bg-[#f5f5f5] items-center w-screen h-screen">
          <NavbarSite />
          <Component {...pageProps} />
        </main>
      )}
    </>
  );
}

export default MyApp;

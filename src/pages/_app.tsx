import React, { useEffect } from "react";
import Navbar from "@/ui/components/layout/Navbar";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Header from "@/ui/components/layout/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarSite from "@/ui/components/layout/NavbarSite";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Verificar se a rota é uma rota do dashboard
  const isDashboardRoute = router.pathname.startsWith("/dashboard");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      {isDashboardRoute ? (
        <>
          <Head>
            <title>CG-Tech Dashboard</title>
          </Head>
          <main className="flex w-screen h-screen">
            <Navbar />
            <div className="w-full h-full">
              <Header />
              <Component {...pageProps} />
            </div>
          </main>
        </>
      ) : (
        <>
          <Head>
            <title>CG-Tech Soluções completas e eficientes</title>
          </Head>
          <NavbarSite />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;

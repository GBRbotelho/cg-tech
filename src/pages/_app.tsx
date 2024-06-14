import React from "react";
import Navbar from "@/ui/components/layout/Navbar";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Verificar se a rota é uma rota do dashboard
  const isDashboardRoute = router.pathname.startsWith("/dashboard");

  return (
    <main className="flex w-screen h-screen">
      {isDashboardRoute && <Navbar />}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

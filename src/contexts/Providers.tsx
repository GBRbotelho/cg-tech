import React from "react";
import { AuthProvider } from "./AuthContext";
import { LoadingProvider } from "./LoadingContext";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: any) {
  return (
    <LoadingProvider>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </LoadingProvider>
  );
}

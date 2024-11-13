import React from "react";
import { AuthProvider } from "./AuthContext";

export default function Providers({ children }: any) {
  return <AuthProvider>{children}</AuthProvider>;
}

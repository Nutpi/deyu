"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/lib/auth";

export default function AuthGuard({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

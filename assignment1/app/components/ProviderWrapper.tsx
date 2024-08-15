"use client"
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface ProviderWrapperProps {
  children: React.ReactNode;
  session?: Session | null;
}

export const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};
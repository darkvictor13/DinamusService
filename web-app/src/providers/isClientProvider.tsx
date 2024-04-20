"use client";
import { createContext, useEffect, useState } from "react";

export const IsClientContext = createContext<boolean>(false);

export default function IsClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientContext.Provider value={isClient}>
      {children}
    </IsClientContext.Provider>
  );
}

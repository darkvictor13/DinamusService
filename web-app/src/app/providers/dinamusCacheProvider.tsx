"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "css", prepend: true });

export default function DinamusCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import { useState, useEffect } from "react";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};

export default ThemeProvider;

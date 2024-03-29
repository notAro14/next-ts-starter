import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Next Starter",
  description: "Next Typescript Starter Template",
};

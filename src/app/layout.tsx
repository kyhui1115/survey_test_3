import { ReactNode } from "react";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/_utils/queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "survey",
  description: "survey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`w-screen h-screen ${inter.className}`}>
        <AntdRegistry>
          <QueryProvider>{children}</QueryProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

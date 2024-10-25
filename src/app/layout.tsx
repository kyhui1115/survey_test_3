import { ReactNode } from "react";
import type { Metadata } from "next";
import { Layout } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/_utils/queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "survey",
  description: "survey_report",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AntdRegistry>
          <QueryProvider>
            <Layout className="h-screen w-screen">{children}</Layout>
          </QueryProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

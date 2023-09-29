"use client";
import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthContext from "./context/AuthContext";
import ToastContext from "./context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={inter.className}>
          <ToastContext />
          {children}
        </body>
      </AuthContext>
    </html>
  );
}

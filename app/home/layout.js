"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const user = useAuth();
  // const router = useRouter();


  // if (user === false) {
  //   return <>Auth loading...</>
  // }
  // if (!user) {
  //   router.push('/auth/login')
  // }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

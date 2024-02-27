import React from "react";
import type { Metadata } from "next";
import { Lusitana } from "next/font/google";

import "@/common/styles/style.scss";
import Navbar from '@/common/components/Navbar'

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: "Forrest Storrs",
  description: "Welcome to Forrest's cool website.",
};
 
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

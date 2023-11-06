import React from "react";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";

import "./globals.scss";
import Navbar from './components/Navbar'

const courierPrime = Courier_Prime({ 
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
      <body className={courierPrime.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

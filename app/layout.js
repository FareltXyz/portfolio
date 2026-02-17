import { Aos } from "./sub/aos";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers"

import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "",
};


export default function RootLayout({ children }) {
  
  return (
    <>
    <head>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />      
    </head>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} box-border min-h-screen max-w-screen antialiased`}
        > 
        <Aos />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    </>
  );
}

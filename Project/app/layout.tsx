import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Notification from "@/components/Notification";
import Menu from "@/components/Menu"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Notification/>
       <Menu/>
       <Navbar/>
       
        {children}
        <Footer/>
      </body>
  
    </html>
  );
}

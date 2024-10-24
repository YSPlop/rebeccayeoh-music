import type { Metadata } from "next";
import localFont from "next/font/local";

import {Providers} from "./providers";
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoogleCaptchaWrapper from "./GoogleRecaptchaWrapper";

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
  title: "RebeccaYeoh Music",
  description: "A simple app for music teachers",
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
        <GoogleCaptchaWrapper>
          <div className="bg-background-pink h-screen">
            <Providers>
              
                <NavBar />
                  {children}
                  <SpeedInsights/>
                <Footer /> 
              
            </Providers>
          </div>
      </GoogleCaptchaWrapper>   
      </body>
    </html>
  );
}

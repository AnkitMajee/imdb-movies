import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import DarkTheme from "@/components/DarkTheme";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body>
      {/* DarkTheme component is used to wrap the application with a dark theme */}
      <DarkTheme>
      <div>
      <Header />
      <Navbar />
      </div>
        {children}
      </DarkTheme>
      </body>
    </html>
    </ClerkProvider>
  );
}

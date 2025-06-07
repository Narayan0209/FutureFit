import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
// import Home from "./component/Home";
import Footer from "./component/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FutureFit",
  description: " Final year Project ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  return (
    <html lang="en">
      <body className="{inter.className}">
      <Navbar />
      <div>
       {children}
      </div>
      <Footer />
      </body>
    </html>
  );
}

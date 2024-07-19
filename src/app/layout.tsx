import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Khalil",
};

interface RootInterface {
  children: React.ReactNode;
}
function RootLayout({ children }: Readonly<RootInterface>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

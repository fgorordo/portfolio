import type { Metadata } from "next";
import { Poppins, Onest } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/ui';


const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"],
});

const onestSans = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando Gorordo | Programador",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppinsSans.className} ${onestSans.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

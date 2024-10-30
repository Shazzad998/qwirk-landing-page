import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })
const roboto = Roboto_Condensed({ subsets: ['latin'], variable: '--font-roboto', })

export const metadata: Metadata = {
  title: "Qwirk",
  description: "Project management application for various business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

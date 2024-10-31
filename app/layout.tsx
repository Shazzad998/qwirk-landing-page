import type { Metadata } from "next";
import { Inter, Dosis } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${dosis.variable} font-sans antialiased px-4 py-2 max-w-full`}
      >
        {children}
      </body>
    </html>
  );
}

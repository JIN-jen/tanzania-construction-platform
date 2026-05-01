import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanzania Construction Resource Platform",
  description: "Find trusted construction drivers and machine operators in Tanzania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TCR Hub | Tanzania Construction Resource Platform",
  description: "Find trusted construction drivers and machine operators in Tanzania through one professional contact point.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

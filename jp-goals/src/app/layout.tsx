import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP's 2026 Goals",
  description: "Goal tracking dashboard for 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

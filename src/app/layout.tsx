import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trying getImgProps",
  description: "Try getImgProps with different use cases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

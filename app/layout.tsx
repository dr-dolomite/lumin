import type { Metadata } from "next";
import "./globals.css";


import Euclid from "next/font/local";

// Font files can be colocated inside of `app`
const euclid = Euclid({
  src: [
    {
      path: "./fonts/EuclidCircularB-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Webby",
  description: "Your modern 5G modem management tool built for simplicity and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${euclid.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

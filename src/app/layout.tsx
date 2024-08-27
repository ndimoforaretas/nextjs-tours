import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Tours",
  description:
    "A tours website built with NextJS, Tailwind CSS, TypeScript, and Storyblok.",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Layout</div>
        {children}
      </body>
    </html>
  );
}

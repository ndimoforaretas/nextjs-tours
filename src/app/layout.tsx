import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Tours",
  description:
    "A tours website built with NextJS, Tailwind CSS, TypeScript, and Storyblok.",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
  });
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50`}>
        <StoryblokProvider>
          <header>
            <nav className="container mx-auto px-4 w-full py-8 flex justify-between">
              <Link href="/">Home</Link>
              <Link href="/tours">Tours</Link>
            </nav>
          </header>
          <main>{children}</main>
        </StoryblokProvider>
      </body>
    </html>
  );
}

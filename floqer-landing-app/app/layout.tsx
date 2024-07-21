import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import StoryblokProvider from "./_components/StoryblokProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Floqer | Best alternative to Clay.com',
  description: 'Floqer is the best alternative to Clay.com, providing sales teams with 100+ data sources helping them enrich the data at the most cost-effective price range, and automate sales processes with AI powered workflows. Start using Floqer today!',
};

storyblokInit({
  accessToken: "gNLWn2fepqdgEYQkNfeW3gtt",
  use: [apiPlugin],
  apiOptions: {
    region: "ca",
  },
  components: {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoryblokProvider>
  );
}

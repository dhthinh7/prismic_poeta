import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import '@/styles/globals.css'
import Link from "next/link";
import Header from "@/components/Header/Header";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const client = createClient();
  const layout = await client.getSingle('layout')

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-dvh">
          <Header layout={layout}/>
          <section className="flex-grow">
            {children}
          </section>
          <Footer layout={layout}/>
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

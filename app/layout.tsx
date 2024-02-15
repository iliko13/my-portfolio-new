import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ContextSection from "@/context/ContextSection";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iliko | Portfolio",
  description: "Iliko's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" !scroll-smooth">
      <body
        className={`${inter.className}  bg-lime-50 text-gray-950 relative  pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50
        dark:text-gray-90`}
      >
        <div
          className="-z-10 bg-sky-100 absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
         dark:bg-sky-900"
        ></div>
        <div
          className=" -z-10 bg-yellow-100 absolute top-[-1rem] left-[-35rem] h-[50rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[5rem]
         dark:bg-indigo-900"
        ></div>

        <ContextSection>
          <Header />
          {children}
          <Footer />
        </ContextSection>

        <ThemeSwitch />
      </body>
    </html>
  );
}

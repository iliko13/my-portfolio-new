import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ContextSection from "@/context/ContextSection";

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
        className={`${inter.className} bg-lime-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div
          className="-z-10 bg-sky-100 absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className=" -z-10 bg-yellow-100 absolute top-[-1rem] left-[-35rem] h-[50rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[5rem]"
        ></div>

        <ContextSection>
          <Header />
          {children}
        </ContextSection>
      </body>
    </html>
  );
}

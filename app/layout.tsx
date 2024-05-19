import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { ActiveSectionContextProvider } from "@/context";

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastian | Personal portfolio",
  description: "Sebastian is a Frontend developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${monserrat.className} bg-bgLight relative`}>
        <div className="bg-divLeftBlur absolute top-[-6rem] left-1/2 -translate-x-3/4 h-[41.25rem] w-[31.25rem] ronded-full blur-[10rem]"></div>
        <div className="bg-divRightBlur absolute top-[-1rem] left-1/2 h-[31.25rem] w-[41.25rem] ronded-full blur-[10rem]"></div>
        <ActiveSectionContextProvider>
          <>
            <Header />
            {children}
          </>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

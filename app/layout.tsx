import type { Metadata } from "next";
import { Montserrat  } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
})


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
    <html lang="en">
      <body 
        className={`${monserrat.className} bg-bgLight`}
      >
        <div className="bg-divLeftBlur absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] ronded-full blur-[10rem] sm:w-[68.75]" ></div>
        <div className="bg-divRightBlur absolute top-[-1rem] left-[35rem] h-[31.25rem] w-[50rem] ronded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}

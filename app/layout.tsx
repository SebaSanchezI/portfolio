import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Header } from "@/components"
import { ActiveSectionContextProvider } from "@/context"
import { Toaster } from "react-hot-toast"
import ThemeSwitch from "@/components/themeSwitch"
import ThemeContextProvider from "@/context/themeContext"

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
      <body className={`${monserrat.className}  pt-28 sm:pt-36 bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark dark:text-opacity-90 relative`}>
        <div className="bg-divLeftBlur dark:bg-[#946263] absolute top-[-6rem] h-[41.25rem] w-[11.25rem] md:w-[31.25rem] lg:w-[41.25rem] 2xl:w-[55.25rem] ronded-full blur-[10rem]"></div>
        <div className="bg-divRightBlur dark:bg-[#676394] absolute top-[-1rem] left-1/2 h-[31.25rem] w-[11.25rem] md:w-[31.25rem] lg:w-[41.25rem] 2xl:w-[55.25rem] ronded-full blur-[10rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <>
              <Header />
              {children}
              <Toaster 
                position="top-right"
              />
            </>
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

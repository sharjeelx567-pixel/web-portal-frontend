import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { PageTransition } from "@/components/page-transition";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ARCH-LAB | High-End SaaS Engineering",
  description: "Senior Frontend Engineer specializing in architecture-driven SaaS and Web3 platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen scrollbar-thin`}>
        <Navbar />
        <main className="flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

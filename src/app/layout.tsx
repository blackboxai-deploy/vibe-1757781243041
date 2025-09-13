import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Mr.JM AI Humanizer Tool - Convert AI Text to Human-like Content",
  description: "Transform AI-generated text into natural, human-like content that bypasses AI detection. Professional AI text humanizer tool with advanced algorithms.",
  keywords: "AI humanizer, AI text converter, bypass AI detection, humanize AI text, AI content tool",
  authors: [{ name: "Mr.JM AI Team" }],
  openGraph: {
    title: "Mr.JM AI Humanizer Tool - Convert AI Text to Human-like Content",
    description: "Transform AI-generated text into natural, human-like content that bypasses AI detection.",
    type: "website",
    url: "https://mrjm-ai-humanizer.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr.JM AI Humanizer Tool",
    description: "Transform AI-generated text into natural, human-like content that bypasses AI detection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-inter antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
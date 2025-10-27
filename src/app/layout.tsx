import type { Metadata } from "next";
import { Allerta_Stencil } from "next/font/google";
import "./globals.css";

const allertaStencil = Allerta_Stencil({
  weight: "400",
  variable: "--font-allerta-stencil",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImAiPage - AI-Generated Landing Page",
  description:
    "A demonstration of LLM-driven UI generation using Shadcn components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${allertaStencil.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

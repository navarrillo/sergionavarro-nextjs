import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sergio Navarro",
  description: "Software engineer empowered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta property="og:url" content="https://sergionavarro.me" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sergio Navarro - Software engineer" />
      <meta
        property="og:description"
        content="Experienced Software Engineer & Development Manager with over 7 Years in Tech Innovation"
      />
      <meta property="og:image" content="https://sergionavarro.me/me.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://sergionavarro.me" />
      <meta property="twitter:url" content="https://sergionavarro.me" />
      <meta name="twitter:title" content="Sergio Navarro - Software engineer" />
      <meta
        name="twitter:description"
        content="Experienced Software Engineer & Development Manager with over 7 Years in Tech Innovation"
      />
      <meta name="twitter:image" content="https://sergionavarro.me/me.jpg" />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

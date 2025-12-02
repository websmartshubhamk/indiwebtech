import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IndieWebTech Studio",
  description:
    "Modern marketing sites, case studies, and lead funnels for web service teams.",
  metadataBase: new URL("https://indiewebtech.example.com"),
  openGraph: {
    title: "IndieWebTech Studio",
    description:
      "Modern marketing sites, case studies, and lead funnels for web service teams.",
    url: "https://indiewebtech.example.com",
    siteName: "IndieWebTech Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndieWebTech Studio",
    description:
      "Modern marketing sites, case studies, and lead funnels for web service teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} bg-slate-950 text-white`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <SiteHeader />
          <main className="pb-16">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

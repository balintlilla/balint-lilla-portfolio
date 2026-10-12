import type { Metadata } from "next";
import { Source_Sans_3, Syne } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://balintlilla.github.io/balint-lilla-portfolio",
  ),
  title: {
    default: `${profile.displayName} — ${profile.title}`,
    template: `%s · ${profile.displayName}`,
  },
  description: profile.summary,
  authors: [{ name: profile.displayName }],
  openGraph: {
    title: `${profile.displayName} — ${profile.title}`,
    description: profile.summary,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.displayName} — ${profile.title}`,
    description: profile.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

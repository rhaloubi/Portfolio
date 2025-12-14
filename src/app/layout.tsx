import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Azeret_Mono } from "next/font/google";
import { Bowlby_One_SC } from "next/font/google";
import ClientWrapper from "./ClientWrapper";
import { type Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Reda Haloubi - Portfolio",
    template: "%s - Reda Haloubi Portfolio",
  },
  description:
    "Portfolio of Reda Haloubi, a 23-year-old Computer Science student from Tangier, Morocco, passionate about technology, web development, and creative projects.",
  metadataBase: new URL("https://redahaloubi.com/"),
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/icon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon-32x32.png", type: "image/x-icon", sizes: "32x32" },
  ],
};

const bowlbyOneSC = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bowlby-one-sc",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${azeretMono.className} ${bowlbyOneSC.variable}`}
    >
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="V68T7AfQe1mjJSjuYkX1U-G8xKYMDgRd5s0vow7aLew"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HSEVKCT9XN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HSEVKCT9XN');
          `}
        </Script>
      </head>
      <body>
        <Script id="website-structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Reda Haloubi Portfolio",
            alternateName: ["Reda Haloubi", "Haloubi Portfolio"],
            url: "https://redahaloubi.com/",
          })}
        </Script>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}


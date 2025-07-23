
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Azeret_Mono } from "next/font/google";
import ClientWrapper from "./ClientWrapper";
import { type Metadata } from 'next';



export const metadata: Metadata = {
  title: {
    default: 'Reda Haloubi - Portfolio',
    template: '%s | Reda Haloubi Portfolio',
  },
  description:
    'Portfolio of Reda Haloubi, a 23-year-old Computer Science student from Tangier, Morocco, passionate about technology, web development, and creative projects.',
  metadataBase: new URL('https://haloubi-reda.clarodigi.com'), // Replace with your actual domain
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: {
    title: 'Reda Haloubi - Portfolio',
    description:
      'Showcasing projects and skills of Reda Haloubi, Computer Science student specializing in JavaScript, Python, React.js, and more.',
    url: 'https://haloubi-reda.clarodigi.com',
    siteName: 'Reda Haloubi Portfolio',
    images: [
      {
        url: '/img/opengraph-image.png', // Add an actual OG image
        width: 1200,
        height: 630,
        alt: 'Reda Haloubi Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reda Haloubi - Portfolio',
    description:
      'Portfolio of Reda Haloubi, a Computer Science student and developer.',
    images: ['/img/opengraph-image.png'], // Add an actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${azeretMono.className}`}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

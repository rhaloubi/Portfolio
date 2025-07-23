
import { type Metadata } from 'next';
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Widget from '../components/spotify/widgets';
import Footer from "../layout/footer";
import Work from "../components/work/main";

export const metadata: Metadata = {
  title: 'Home - Reda Haloubi Portfolio',
  description: 'Welcome to the portfolio of Reda Haloubi, a 23-year-old Computer Science student passionate about web development, music, and sports.',
    openGraph: {
    title: 'Reda Haloubi - Portfolio',
    description:
      'Showcasing projects and skills of Reda Haloubi, Computer Science student specializing in JavaScript, Python, React.js, and more.',
    url: 'https://haloubi-reda.clarodigi.com',
    siteName: 'Reda Haloubi Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
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
    images: ['/opengraph-image.png'],
  },
};

export default function HomePage() {




  return (
    <div className="relative overflow-hidden">
      <main className="relative z-20 flex flex-col bg-[#0B0B0B] text-white">
        <Hero/> 
        <About/>
        <Widget/>
        <Work/>
      </main>
     
      <div className="relative z-0">
              <Footer/>
            </div>
    </div>
  );
}

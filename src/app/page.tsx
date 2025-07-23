
import { type Metadata } from 'next';
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Widget from '../components/spotify/widgets';
import Footer from "../layout/footer";
import Work from "../components/work/main";

export const metadata: Metadata = {
  title: 'Home ',
  description: 'Welcome to the portfolio of Reda Haloubi, a 23-year-old Computer Science student passionate about web development, music, and sports.',

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

import { type Metadata } from 'next';
import Footer from "~/layout/footer";
import ProjectMain from "~/components/project/GoldBrand/main";

export const metadata: Metadata = {
  title: 'GoldBrand Project - Reda Haloubi Portfolio',
  description: 'Details about the GoldBrand project developed by Reda Haloubi, showcasing web development skills.',
  openGraph: {
    title: 'GoldBrand Project',
    description: 'Project showcase from Reda Haloubi\'s portfolio.',
    images: [{ url: '/img/Goldbrand/2.jpg' }],
  },
};

export default function ProjectPage() {

    return (
      <div className="relative overflow-hidden">
        <main className="relative z-10 flex flex-col bg-[#0B0B0B] text-white">
            <ProjectMain/>
        </main>
        <div className="relative z-0">
              <Footer/>
            </div>
      </div>
    );
  }
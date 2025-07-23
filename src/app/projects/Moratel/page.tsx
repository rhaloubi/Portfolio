import { type Metadata } from 'next';
import Footer from "~/layout/footer";
import ProjectMain from "~/components/project/Moratel/main";

export const metadata: Metadata = {
  title: 'Moratel Project - Reda Haloubi Portfolio',
  description: 'Details about the Moratel project developed by Reda Haloubi, highlighting ERP system development.',
  openGraph: {
    title: 'Moratel Project',
    description: 'Project showcase from Reda Haloubi\'s portfolio.',
    images: [{ url: '/img/ERP/1.jpg' }],
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
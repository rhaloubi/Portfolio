import { type Metadata } from 'next';
import Footer from "~/layout/footer";
import ProjectMain from "~/components/project/AsharqCar/main";

export const metadata: Metadata = {
  title: 'Asharq Al Awsat Car Project - Reda Haloubi Portfolio',
  description: 'Asharq Al Awsat Car is a full-featured car rental and limousine booking platform built for a Tangier-based rental agency. It allows users to browse cars, view details, and make reservations online. The project includes SEO optimization, image management through Cloudinary, and a PostgreSQL database for data persistence.',
  openGraph: {
    title: 'Asharq Al Awsat Car Project',
    description: 'Project showcase from Reda Haloubi\'s portfolio.',
    images: [{ url: '/img/ASHARQ/2.png' }],
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
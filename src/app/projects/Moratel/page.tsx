import Footer from "~/layout/footer";
import ProjectMain from "~/components/project/Moratel/main";

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
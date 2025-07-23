import { Button } from "../../ui/button";
import { useRouter } from 'next/navigation';
import Image from "next/image";


export default function SectionERP() {
    const router = useRouter();

    return (
        <div className=" flex flex-col font-[SFCompactRounded] md:flex-row gap-8">
            <div className="flex-1 p-4 text-center">
                <h3 className="text-[50px] text-gray-400 font-[TTTrailers]  mb-4">Project Details</h3>
                <p className="text-gray-100 mb-6 px-8 text-lg">
                Developed a CRM system using the MMRN stack to manage workflows and absences. Integrated CI/CD with GitHub Actions, Docker, and deployed to Vercel and AWS EC2 for high performance.                </p>
                <Button 
                className="relative inline-flex text-[20px] md:text-[24px] font-[TTTrailers] border-t border-l border-[#399918] rounded-full h-12 md:h-13 items-center px-6 md:px-10 py-2 bg-[length:200%_100%] text-white transition-all duration-500 hover:bg-[center_right_10px] hover:shadow-lg hover:shadow-green-300/50"
                onClick={() => router.push('/projects/Moratel')}
                >
                Check Project
                </Button>
            </div>
            <div className="flex-1 flex justify-end ">
                <div className="w-full md:w-[35vw]">
                    <div className="flex justify-center font-[TTTrailers] text-gray-300 items-center gap-4 my-4">
                    <div className="bg-green-900 px-1 ">
                        <h3 className="text-3xl  text-center">ReactJS</h3>
                        </div>
                        <div className="bg-green-900 px-1 ">
                            <h3 className="text-3xl  text-center">ExpressJS</h3>
                        </div>
                    </div>
                    <div className="w-full h-[35vh] bg-gray-800 border-l border-y border-gray-500 overflow-hidden">
                        <Image 
                            src="/img/ERP/1.jpg"
                            className="w-full h-full object-cover"
                            width={100}
                            height={100}
                            alt={"CRM system image"}
                            loading="lazy"  // Lazy load
                            sizes="(max-width: 768px) 100vw, 35vw"
                            
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}
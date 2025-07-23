import { Button } from "../../ui/button";
import Image from "next/image";

export default function SectionPort() {
    return (
        <div className=" flex flex-col font-[SFCompactRounded] md:flex-row gap-8">
            <div className="flex-1 p-4 text-center">
                <h3 className="text-[50px] text-gray-400 font-[TTTrailers]  mb-4">Project Details</h3>
                <p className="text-gray-100 mb-6 px-8 text-lg">
                Designed and built a sleek portfolio website for a DJ client using WordPress and Elementor, highlighting their work, mixes, and events with a responsive, visually engaging, and easy-to-manage layout.                </p>
                <Button 
                className="relative inline-flex text-[20px] md:text-[24px] font-[TTTrailers] border-t border-l border-[#399918] rounded-full h-12 md:h-13 items-center px-6 md:px-10 py-2 bg-[length:200%_100%] text-white transition-all duration-500 hover:bg-[center_right_10px] hover:shadow-lg hover:shadow-green-300/50"
                onClick={() => window.open('https://omaadness.clarodigi.com/', '_blank')}
                >
                Check Project
                </Button>
            </div>
            <div className="flex-1 flex justify-end ">
                <div className="w-full md:w-[35vw]">
                    <div className="flex justify-center font-[TTTrailers] text-gray-300 items-center gap-4 my-4">
                    <div className="bg-green-900 px-1 ">
                        <h3 className="text-3xl  text-center">Wordpress</h3>
                        </div>
                        <div className="bg-green-900 px-1 ">
                            <h3 className="text-3xl  text-center">Portfolio</h3>
                        </div>
                    </div>
                    <div className="w-full h-[35vh] bg-gray-800 border-l border-y border-gray-500 overflow-hidden">
                        <Image 
                            src="/img/Port/1.jpg" 
                            className="w-full h-full object-cover"
                            loading="lazy"  // Lazy load
                            sizes="(max-width: 768px) 100vw, 35vw"
                            width={100}
                            height={100}  
                            alt="Portfolio image"  // Add alt for accessibility
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
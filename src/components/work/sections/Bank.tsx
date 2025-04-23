import { Button } from "../../ui/button";

export default function SectionBank() {
    return (
        <div className=" flex flex-col font-[SFCompactRounded] md:flex-row gap-8">
            <div className="flex-1 p-4 text-center">
                <h3 className="text-[50px] text-gray-400 font-[TTTrailers]  mb-4">Project Details</h3>
                <p className="text-gray-100 mb-6 px-8 text-lg">
                Developed a secure online banking system using .NET 7 and Blazor, focusing on backend logic, JWT authentication, bcrypt encryption, and containerized deployment with Docker for scalable, real-world financial applications.                </p>
                <Button 
                onClick={() => window.open('https://github.com/rhaloubi/Online_Bank-/', '_blank')}
                className="relative inline-flex text-[20px] md:text-[24px] font-[TTTrailers] border-t border-l border-[#399918] rounded-full h-12 md:h-13 items-center px-6 md:px-10 py-2 bg-[length:200%_100%] text-white transition-all duration-500 hover:bg-[center_right_10px] hover:shadow-lg hover:shadow-green-300/50"
                >
                Check Project
                </Button>
            </div>
            <div className="flex-1 flex justify-end ">
                <div className="w-full md:w-[35vw]">
                    <div className="flex justify-center font-[TTTrailers] text-gray-300 items-center gap-4 my-4">
                    <div className="bg-green-900 px-1 ">
                        <h3 className="text-3xl  text-center">ASP.NET</h3>
                        </div>
                        <div className="bg-green-900 px-1 ">
                            <h3 className="text-3xl  text-center">Blazor</h3>
                        </div>
                    </div>
                    <div className="w-full h-[35vh] bg-gray-800 border-l border-y border-gray-500 overflow-hidden">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
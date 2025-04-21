export default function Section() {
    return (
        <div className=" flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-4 text-center">
                <h3 className="text-[50px] font-[TTTrailers]  mb-4">Project Details</h3>
                <p className="text-gray-400  text-lg">
                    This is a collection of custom-designed t-shirts featuring unique artwork and patterns.
                    Each piece is carefully crafted to reflect modern streetwear aesthetics while maintaining
                    comfort and style.
                </p>
            </div>
            <div className="flex-1 flex justify-end">
                <div className="w-full md:w-[35vw]">
                    <h3 className="text-3xl font-[TTTrailers] mb-4">Project Preview</h3>
                    <div className="w-full h-[29vh] bg-gray-800 border-l border-t   border-gray-500 overflow-hidden">
                        <img 
                            src="/img/bullseye-gradient.svg" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Hero() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:items-top justify-center mt-[10vh] sm:mt-[20vh] px-4 sm:px-0">
        <h1 className="font-[TTTrailers] text-[120px] sm:text-[180px] md:text-[220px] lg:text-[264px] leading-[0.75] sm:leading-[0.85] md:leading-[198px] text-white text-center sm:text-left" style={{ letterSpacing: '-0.02em' }}>
          LET TALK
        </h1>
        
        <h2 className="font-[AtomicMarker] text-[24px] sm:text-[30px] md:text-[39px] text-[#399918] tracking-wider font-light self-center sm:self-end sm:mr-20 mt-2 sm:-mb-[10px] sm:-ml-[50px]">
          About Me
        </h2>   
      </div>

      <p className="max-w-sm sm:max-w-xl md:max-w-2xl mx-auto text-gray-400 text-base sm:text-lg px-4 text-center mt-4 sm:mt-0">
        Have questions about my background or experience? I'd be glad to share more. 
        <span className="block sm:inline text-xs sm:text-sm text-gray-300 mt-2 sm:mt-0 sm:ml-2">
          (click on terminal for more details)
        </span>
      </p>
    </>
  );
}
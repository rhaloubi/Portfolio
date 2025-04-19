
export default function Hero() {
  return (
    <>
      <div className="flex items-top justify-center   mt-[20vh]">
        <h1 className="font-[TTTrailers] text-[264px]  leading-[198px] text-white" style={{ letterSpacing: '-0.02em' }}>
          LET TALK
        </h1>
        
        
        <h2 className="font-[AtomicMarker] text-[39px] text-[#399918] tracking-wider font-light self-end mr-20 -mb-[10px] -ml-[50px]">About Me</h2>   

       
      </div>
      <p className="max-w-2xl mx-auto text-gray-400 text-lg px-4">
      Have questions about my background or experience? I’d be glad to share more. 
      <span className="text-sm text-gray-300">(click on terminal for more details)</span>
        </p>

    </>
  );
}
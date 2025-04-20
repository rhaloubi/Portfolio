
import React from 'react';
import AnimatedText from './animatedtext';

export default function Work(): JSX.Element {
  return (
    <div className="row row-title font-[TTTrailers]  z-20 text-white" style={{ justifyContent: 'left' }}>
      <div className="col  border-t-2 hover:bg-gray-900 cursor-pointer border-white  md:px-0">
        <h2>
          <AnimatedText text="T-SHIRTS:" />
        </h2>
      </div>
      <div className="col  border-t-2 hover:bg-gray-900 cursor-pointer border-white  md:px-0">
        <h2>
          <AnimatedText text="Project-2" />
        </h2>
      </div>
       <div className="col  border-t-2 hover:bg-gray-900 cursor-pointer border-white  md:px-0">
        <h2>
          <AnimatedText text="Project-3" />
        </h2>
      </div>
    </div>
  );
}
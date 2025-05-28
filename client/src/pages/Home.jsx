import React from 'react';
import Download from '../assets/Download.jpg';
import OIP from '../assets/OIP.jpg';
import OIP1 from '../assets/OIP1.jpg';

const Home = () => {
  return (
    <div className="bg-[light purple] min-h-screen flex flex-row justify-center items-center relative overflow-hidden">
      
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-green-300 rounded-xl rotate-12 opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-200 rounded-xl rotate-45 opacity-30 z-0"></div>
      <div className="absolute top-[20%] left-[10%] w-40 h-20 bg-pink-200 rounded-md opacity-40 z-0"></div>
      <div className="absolute top-[30%] right-[10%] w-40 h-20 bg-blue-200 rounded-md opacity-40 z-0"></div>

      {/* Text Section */}
      <div className="text-center z-10 px-4 mr-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          Your <span className="font-bold">Success</span>
           <br />
          <span className='pl-10'>Story Begins</span> <br />
          With a <span className="text-blue-600 underline">Resume</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Create an impressive resume in minute.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full text-base hover:bg-blue-700 transition-all duration-300">
          Click Here →
        </button>
      </div>

      {/* Resume Images Layout */}
      <div className="relative ml-16 w-full max-w-[500px] h-[300px] z-10">
        {/* Left Image */}
        <img
          src={OIP}
          alt="Resume Left"
          className="absolute left-0 bottom-0 w-[180px] h-[260px] rounded-md shadow-lg transform -rotate-2 z-10"
        />
        
        {/* Right Image */}
        <img
          src={OIP1}
          alt="Resume Right"
          className="absolute right-0 bottom-0 w-[180px] h-[260px] rounded-md shadow-lg transform rotate-2 z-10"
        />
        
        {/* Center Image (on top) */}
        <img
          src={Download}
          alt="Resume Center"
          className="absolute left-1/2 bottom-0 w-[200px] h-[280px] rounded-md shadow-2xl transform -translate-x-1/2 z-20"
        />
      </div>
    </div>
  );
};

export default Home;

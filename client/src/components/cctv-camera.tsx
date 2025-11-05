import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CCTVCamera() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Simple left/right movement based on cursor position
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const centerX = screenWidth / 2;
  const cameraX = ((mousePosition.x - centerX) / centerX) * 100; // Move left/right 100px

  return (
    <motion.div 
      className="cctv-camera"
      animate={{
        x: cameraX,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
      }}
    >
      <div className="relative">
        {/* Wall Mount Bracket - L-shaped */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          {/* Vertical part of bracket */}
          <div className="w-3 h-8 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 border border-gray-500 shadow-lg"></div>
          {/* Horizontal connector */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-500 shadow-md"></div>
        </div>
        
        {/* Bullet-Style CCTV Camera Housing */}
        <div className="relative pt-6">
          {/* Main Cylindrical Body */}
          <div className="relative w-24 h-12 flex items-center">
            {/* Camera Cylinder - Bullet Style */}
            <div className="absolute left-0 w-24 h-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-r-full shadow-2xl border-2 border-gray-400 overflow-hidden">
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-white/40 to-transparent rounded-tr-full"></div>
              {/* Bottom shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/20 to-transparent rounded-br-full"></div>
              
              {/* Lens Section at front */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 -mr-4">
                {/* Outer Lens Ring - Black */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full border-4 border-gray-700 shadow-2xl flex items-center justify-center">
                  {/* Middle Ring */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-full border-2 border-gray-600 flex items-center justify-center">
                    {/* Glass Lens */}
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-900 via-blue-950 to-black rounded-full border-2 border-blue-800 relative overflow-hidden shadow-inner">
                      {/* Lens Reflection */}
                      <div className="absolute top-1 left-1.5 w-3 h-3 bg-white/50 rounded-full blur-sm"></div>
                      <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-blue-300/40 rounded-full blur-[1px]"></div>
                      
                      {/* Lens Internal Details */}
                      <div className="absolute inset-1 border-2 border-blue-400/30 rounded-full"></div>
                      <div className="absolute inset-2 border border-blue-500/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* IR LED Ring around lens */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 -mr-4">
                {/* 6 IR LEDs positioned in a circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-900 rounded-full border border-red-700"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-900 rounded-full border border-red-700"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-900 rounded-full border border-red-700"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-900 rounded-full border border-red-700"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-900 rounded-full border border-red-700"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-900 rounded-full border border-red-700"></div>
              </div>
              
              {/* Status LED - Recording */}
              <div className="absolute top-1.5 left-3 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-lg border border-red-300">
                <div className="absolute inset-0.5 bg-red-400 rounded-full"></div>
              </div>
              
              {/* Brand Label */}
              <div className="absolute top-1.5 left-8 text-[9px] font-black text-gray-700 tracking-tight">
                KIRPAL
              </div>
              <div className="absolute top-3.5 left-8 text-[6px] font-bold text-gray-500 tracking-wider">
                CCTV
              </div>
              
              {/* Camera Body Details */}
              <div className="absolute bottom-1.5 left-3 space-y-px">
                <div className="w-5 h-px bg-gray-400 opacity-60"></div>
                <div className="w-5 h-px bg-gray-400 opacity-60"></div>
                <div className="w-5 h-px bg-gray-400 opacity-60"></div>
              </div>
              
              {/* Adjustment Ring Details */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-400 opacity-40"></div>
              <div className="absolute left-12 top-0 bottom-0 w-px bg-gray-400 opacity-40"></div>
            </div>
            
            {/* Sunshade/Hood at front */}
            <div className="absolute right-0 w-6 h-14 -mr-2">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-r-lg border-2 border-gray-700 shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
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
        x: cameraX, // Simple left/right movement with cursor
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
      }}
    >
      {/* Wall Mount */}
      <div className="relative">
        {/* Mount Bracket */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg shadow-lg border border-gray-700"></div>
        
        {/* Camera Housing - No rotation, just static */}
        <div className="relative">
          <div className="relative w-20 h-14">
            {/* Main Camera Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-600">
              {/* Camera Housing Details */}
              <div className="absolute inset-1 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"></div>
              
              {/* Lens Housing */}
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full border-2 border-gray-500 shadow-inner flex items-center justify-center">
                {/* Outer Lens Ring */}
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-full border border-gray-400 flex items-center justify-center">
                  {/* Main Lens - Static, no rotation */}
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-900 via-blue-800 to-black rounded-full border border-blue-700 relative overflow-hidden shadow-inner">
                    {/* Lens Reflection */}
                    <div className="absolute top-1 left-1 w-2 h-2 bg-white opacity-40 rounded-full blur-[1px]"></div>
                    
                    {/* Static Lens Ring */}
                    <div className="absolute inset-0.5 border border-blue-400 rounded-full opacity-60">
                      {/* Simple aperture lines - no animation */}
                      <div className="absolute top-0 left-1/2 w-px h-2 bg-blue-400 opacity-30 transform -translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-1/2 w-px h-2 bg-blue-400 opacity-30 transform -translate-x-1/2"></div>
                      <div className="absolute left-0 top-1/2 h-px w-2 bg-blue-400 opacity-30 transform -translate-y-1/2"></div>
                      <div className="absolute right-0 top-1/2 h-px w-2 bg-blue-400 opacity-30 transform -translate-y-1/2"></div>
                    </div>
                    
                    {/* Inner Lens Glare */}
                    <div className="absolute inset-1 bg-gradient-to-tr from-transparent via-blue-200 to-transparent opacity-20 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Status LED */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-glow border border-red-300">
                <div className="absolute inset-0.5 bg-red-400 rounded-full"></div>
              </div>
              
              {/* Brand Label */}
              <div className="absolute bottom-1 right-2 text-[8px] font-bold text-brand-red opacity-80">
                KIRPAL
              </div>
              
              {/* Ventilation Grilles */}
              <div className="absolute top-2 left-2 space-y-0.5">
                <div className="w-4 h-px bg-gray-500 opacity-60"></div>
                <div className="w-4 h-px bg-gray-500 opacity-60"></div>
                <div className="w-4 h-px bg-gray-500 opacity-60"></div>
              </div>
              
              {/* IR LEDs (Night Vision) */}
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 space-y-1">
                <div className="w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 opacity-70"></div>
                <div className="w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
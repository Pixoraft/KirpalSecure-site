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
        {/* Wall Mount Bracket - Top */}
        <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2">
          {/* Mounting Plate */}
          <div className="w-16 h-5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-t-lg border-2 border-gray-400 shadow-xl relative">
            {/* Screw holes */}
            <div className="absolute top-1.5 left-2 w-1.5 h-1.5 bg-gray-600 rounded-full shadow-inner"></div>
            <div className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-gray-600 rounded-full shadow-inner"></div>
            {/* Cable conduit holes */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-1.5 bg-gray-500 rounded-b"></div>
          </div>
          {/* Connection arm */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-7 h-2.5 bg-gradient-to-b from-gray-300 to-gray-400 border-x-2 border-gray-400"></div>
        </div>
        
        {/* PTZ Dome Camera Housing */}
        <div className="relative pt-4">
          <div className="relative w-20 h-17">
            {/* White Dome Housing - Upper half */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-t-full border-2 border-gray-300 shadow-2xl overflow-hidden">
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-3.5 bg-gradient-to-b from-white/80 to-transparent rounded-t-full"></div>
              {/* Side shadows */}
              <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-gradient-to-r from-gray-300/40 to-transparent"></div>
              <div className="absolute top-0 right-0 bottom-0 w-2.5 bg-gradient-to-l from-gray-300/40 to-transparent"></div>
              
              {/* Brand Label on top */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="text-[8px] font-black text-brand-red tracking-tight">KIRPAL</div>
              </div>
            </div>
            
            {/* Middle White Ring - Background for PTZ Ball */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-18 h-18 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full border-2 border-gray-300 shadow-xl z-10 flex items-center justify-center">
              {/* Inner circle */}
              <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full"></div>
            </div>
            
            {/* Lower Housing Base - White */}
            <div className="absolute top-10.5 left-1/2 transform -translate-x-1/2 w-20 h-6.5 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 border-2 border-t-0 border-gray-300 shadow-xl rounded-b-lg overflow-hidden z-20">
              {/* Bottom shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* PTZ Black Ball Mechanism - Visible through dome */}
            <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 z-30">
              {/* Black PTZ Ball */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full border-2 border-gray-700 shadow-2xl flex items-center justify-center">
                {/* Camera Lens Housing */}
                <div className="w-11 h-11 bg-gradient-to-br from-gray-800 to-black rounded-full border-2 border-gray-600 flex items-center justify-center relative">
                  {/* Main Glass Lens */}
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-900 via-blue-950 to-black rounded-full border-2 border-blue-800 relative overflow-hidden shadow-inner">
                    {/* Lens Reflection */}
                    <div className="absolute top-0.5 left-1 w-2 h-2 bg-white/60 rounded-full blur-sm"></div>
                    <div className="absolute top-1.5 right-1 w-1 h-1 bg-blue-300/50 rounded-full blur-[1px]"></div>
                    {/* Lens Details */}
                    <div className="absolute inset-0.5 border border-blue-400/40 rounded-full"></div>
                    <div className="absolute inset-1 border border-blue-500/30 rounded-full"></div>
                  </div>
                  
                  {/* IR LED Ring - 8 LEDs around the lens */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0.5 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0.5 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-0.5 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-0.5 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-red-900 rounded-full border border-red-700 shadow-glow"></div>
                </div>
                
                {/* Recording LED on ball */}
                <div className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg border border-red-300 z-20">
                  <div className="absolute inset-0.5 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Transparent dome glass effect overlay */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-12 rounded-t-full pointer-events-none">
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-t-full"></div>
              <div className="absolute top-2 left-4 w-5 h-2.5 bg-white/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
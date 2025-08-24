import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CCTVCamera() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  // Calculate smooth camera rotation based on mouse position
  const centerX = windowSize.width / 2;
  const centerY = 100; // Fixed camera position
  
  // Horizontal rotation (left/right movement)
  const horizontalRotation = ((mousePosition.x - centerX) / centerX) * 45; // Max 45 degrees
  
  // Vertical tilt (up/down movement) 
  const verticalTilt = ((mousePosition.y - centerY) / windowSize.height) * 20; // Max 20 degrees
  
  // Lens tracking angle
  const lensAngle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX) * (180 / Math.PI);

  return (
    <div className="cctv-camera">
      {/* Wall Mount */}
      <motion.div className="relative">
        {/* Mount Bracket */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg shadow-lg border border-gray-700"></div>
        
        {/* Camera Housing */}
        <motion.div
          className="relative"
          animate={{
            rotateY: horizontalRotation,
            rotateX: verticalTilt,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 12,
          }}
        >
          <div className="relative w-20 h-14">
            {/* Main Camera Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-600">
              {/* Camera Housing Details */}
              <div className="absolute inset-1 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"></div>
              
              {/* Lens Housing */}
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full border-2 border-gray-500 shadow-inner flex items-center justify-center">
                {/* Outer Lens Ring */}
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-full border border-gray-400 flex items-center justify-center">
                  {/* Main Lens */}
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-br from-blue-900 via-blue-800 to-black rounded-full border border-blue-700 relative overflow-hidden shadow-inner"
                    animate={{
                      rotateZ: lensAngle * 0.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                    }}
                  >
                    {/* Lens Reflection */}
                    <div className="absolute top-1 left-1 w-2 h-2 bg-white opacity-40 rounded-full blur-[1px]"></div>
                    
                    {/* Lens Aperture Blades */}
                    <motion.div
                      className="absolute inset-0.5 border border-blue-400 rounded-full opacity-60"
                      animate={{
                        rotateZ: -lensAngle * 0.2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 25,
                      }}
                    >
                      {/* Aperture Lines */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <div
                          key={angle}
                          className="absolute w-px h-2 bg-blue-400 opacity-30 top-1/2 left-1/2 origin-bottom"
                          style={{
                            transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                          }}
                        />
                      ))}
                    </motion.div>
                    
                    {/* Inner Lens Glare */}
                    <div className="absolute inset-1 bg-gradient-to-tr from-transparent via-blue-200 to-transparent opacity-20 rounded-full"></div>
                  </motion.div>
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
        </motion.div>
        
        {/* Detection Beam Effect */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
          animate={{
            rotateZ: horizontalRotation * 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
          <motion.div
            className="w-2 h-2 bg-red-500 rounded-full shadow-glow absolute -top-0.5 opacity-60"
            animate={{
              x: [0, 128, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        {/* Scanning Arc */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2"
          animate={{
            rotateZ: horizontalRotation * 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 10,
          }}
        >
          <svg width="60" height="30" className="opacity-20">
            <path
              d="M 5 25 Q 30 5 55 25"
              stroke="rgb(239, 68, 68)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="2,2"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
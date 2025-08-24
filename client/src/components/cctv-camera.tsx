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

  // Calculate camera rotation based on mouse position
  const cameraTilt = (mousePosition.x - window.innerWidth / 2) / 20;
  const lensRotation = Math.atan2(mousePosition.y - 100, mousePosition.x - window.innerWidth / 2) * (180 / Math.PI);

  return (
    <div className="cctv-camera">
      <motion.div
        className="relative"
        animate={{
          rotateY: cameraTilt,
          rotateX: (mousePosition.y - 100) / 50,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      >
        {/* Camera Base */}
        <div className="relative w-16 h-12">
          {/* Camera Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
            {/* Camera Mount */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-8 bg-gray-700 rounded-full shadow-inner"></div>
            
            {/* LED Indicator */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-glow"></div>
            
            {/* Camera Lens */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600 shadow-inner flex items-center justify-center"
              animate={{
                rotate: lensRotation / 4,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              {/* Inner Lens */}
              <div className="w-6 h-6 bg-gradient-to-br from-blue-900 to-black rounded-full border border-gray-500 relative overflow-hidden">
                {/* Lens Reflection */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-white opacity-30 rounded-full blur-sm"></div>
                
                {/* Lens Aperture */}
                <motion.div
                  className="absolute inset-1 border border-gray-400 rounded-full"
                  animate={{
                    rotate: -lensRotation / 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                  }}
                >
                  {/* Aperture Lines */}
                  <div className="absolute top-0 left-1/2 w-px h-2 bg-gray-400 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-2 bg-gray-400 transform -translate-x-1/2"></div>
                  <div className="absolute left-0 top-1/2 h-px w-2 bg-gray-400 transform -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 h-px w-2 bg-gray-400 transform -translate-y-1/2"></div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Brand Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 text-xs font-bold text-brand-red">
              KS
            </div>
          </div>
        </div>
        
        {/* Scanning Line Effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-red-500 opacity-50"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
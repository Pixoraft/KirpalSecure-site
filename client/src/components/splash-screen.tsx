import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap } from "lucide-react";

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    // Animate progress bar 0 → 100 over 1.4 s
    const start = performance.now();
    const duration = 1400;
    let raf: number;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(p * 100);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // tiny hold then fade out
        setPhase("hold");
        setTimeout(() => {
          setPhase("out");
          setTimeout(onDone, 500);
        }, 200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "out" && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gray-950 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle radial glow behind logo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 50%, hsl(347 77% 49% / 0.13) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6 px-6">

            {/* Logo badge */}
            <motion.div
              initial={{ scale: 0.72, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center shadow-2xl shadow-brand-red/30">
                <span className="text-white font-black text-3xl tracking-tight select-none">KS</span>
              </div>
              {/* corner accent icons */}
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                <Zap size={12} className="text-yellow-900" fill="currentColor" />
              </span>
              <span className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shadow-lg">
                <Shield size={11} className="text-gray-300" />
              </span>
            </motion.div>

            {/* Company name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-none">
                KIRPAL SECURITIES
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 font-medium tracking-widest uppercase">
                Punjab's Trusted Security Experts
              </p>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.42, ease: "easeOut" }}
            >
              {["7+ Years", "3300+ Installs", "Free Site Survey"].map((label) => (
                <span
                  key={label}
                  className="text-[10px] sm:text-xs font-semibold text-gray-400 border border-gray-700 rounded-full px-3 py-1"
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Progress bar — fixed at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-800">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-red via-red-400 to-brand-red-dark"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

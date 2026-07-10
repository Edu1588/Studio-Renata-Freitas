import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const pathVariants = {
  initial: {
    d: "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z"
  },
  exit: {
    d: [
      "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z",
      "M 0 0 L 100 0 L 100 40 Q 50 100 0 40 Z",
      "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z"
    ],
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

const contentVariants = {
  initial: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } }
};

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const hasLoaded = document.readyState === "complete";
    let isMounted = true;
    
    // Simulate progress but wait for actual load
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        return next > 90 ? 90 : next; // Cap at 90% until fully loaded
      });
    }, 200);

    const finishLoading = () => {
      if (!isMounted) return;
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        document.body.style.overflow = "";
        onLoadingComplete();
      }, 600); // Wait a bit at 100%
    };

    if (hasLoaded) {
      setTimeout(finishLoading, 500); // give it a brief moment
    } else {
      window.addEventListener("load", finishLoading);
    }

    // Fallback just in case
    const fallbackTimeout = setTimeout(finishLoading, 5000);

    return () => {
      isMounted = false;
      document.body.style.overflow = "";
      window.removeEventListener("load", finishLoading);
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
      initial="initial"
      animate="initial"
      exit="exit"
    >
      {/* Background Curved SVG Wipe */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-auto"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          style={{ fill: "var(--background)" }}
          variants={pathVariants}
        />
      </motion.svg>

      {/* Content */}
      <motion.div 
        variants={contentVariants}
        className="absolute inset-0 flex flex-col items-center justify-center max-w-xs w-full px-8 mx-auto pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <img
            src="https://studiorenatafreitas.com.br/wp-content/uploads/2024/02/RenataFreitas_marca_01-01-1.svg"
            alt="Studio Renata Freitas"
            width={240}
            height={42}
            className="w-auto h-10 md:h-12 object-contain brightness-0 opacity-90"
          />
        </motion.div>
        
        <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>
        <div className="mt-4 text-primary font-mono text-xs tracking-widest text-center">
          {Math.round(progress)}%
        </div>
      </motion.div>
    </motion.div>
  );
}

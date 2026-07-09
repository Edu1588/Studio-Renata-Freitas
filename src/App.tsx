import React, { useEffect, useState } from "react";
import { StudioSite } from "./components/StudioSite";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfUse } from "./components/TermsOfUse";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      
      if (!hash.startsWith('#/')) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    if (currentPath === '#/privacidade') return <PrivacyPolicy />;
    if (currentPath === '#/termos') return <TermsOfUse />;
    return <StudioSite />;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPath === '#/privacidade' || currentPath === '#/termos' ? currentPath : 'home'}
        initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
        animate={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
        exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}

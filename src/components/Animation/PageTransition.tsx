'use client';

import { motion, AnimatePresence } from 'framer-motion';

const PageTransitionAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className=" h-5 w-5 bg-slate-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>
      {children}
    </AnimatePresence>
  );
};

export { PageTransitionAnimation };

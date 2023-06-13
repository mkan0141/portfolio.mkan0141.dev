'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

export const HoverText = ({ children, className, color = 'rgb(251 146 60)' }: Props) => {
  return (
    <motion.span
      whileHover={{ color, scale: [null, 1.1, 1.05] }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
};

'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

type WorksItem = {
  title: string;
  summary: string;
  description: string;
  imageUrl: string | null;
};

const WorksCardVariant: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

const WorksCard = ({ title, summary, description, imageUrl }: WorksItem) => {
  return (
    <motion.div
      className="min-h-full rounded-md border border-stone-400 bg-slate-50 p-2"
      whileHover={{ scale: 1.1 }}
      variants={WorksCardVariant}
    >
      <div className="flex aspect-video content-center items-center	">
        <Image
          src={imageUrl}
          width={300}
          height={180}
          alt={title}
          className="rounded-md"
        />
      </div>
      <div className="ml-1 mt-2">
        <div className="text-lg font-bold text-slate-950">{title}</div>
        <div className="text-xs text-slate-600">{summary}</div>
      </div>
    </motion.div>
  );
};

export { WorksCard };

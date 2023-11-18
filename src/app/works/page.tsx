'use client';

import Link from 'next/link';

import { WorksCard } from './components/WorksCard';
import { motion, type Variants } from 'framer-motion';
type WorksItem = {
  title: string;
  summary: string;
  description: string;
  created_at: string;
  siteUrl: string | null;
  imageUrl: string | null;
  githubUrl: string | null;
  techList: string[];
};

const WorksItemList: WorksItem[] = [
  {
    title: 'Fukuro',
    summary: 'WebAPIを用いた録画アプリ',
    description: 'WebAPIのScreen Capture APIを用いた画面録画アプリ。',
    created_at: '2020-05',
    siteUrl: 'https://fukuro.mkan0141.dev/',
    imageUrl:
      'https://raw.githubusercontent.com/mkan0141/Fukuro/master/assets/img/fukuro_logo.png',
    githubUrl: 'https://github.com/mkan0141/Fukuro',
    techList: ['Nuxt'],
  },
  {
    title: 'toEmoji',
    summary: '文章を「それっぽい絵文字文字列」に変換するCLIツール',
    description:
      'word2vecを用いて文章を「それっぽい絵文字文字列」に変換するツール。大学のものづくりサークルの部内コンテストで優勝した。',
    created_at: '2019-03',
    siteUrl: null,
    imageUrl:
      'https://raw.githubusercontent.com/mkan0141/toEmoji/master/image/sample.png',
    githubUrl: 'https://github.com/mkan0141/toEmoji',
    techList: ['Python', 'word2vec'],
  },
  {
    title: 'Twigame',
    summary: 'Twitterでいいねした画像を一覧表示するWebアプリ',
    description:
      'Twitterでいいねした画像を一覧表示するWebアプリ。初めて作ったWebアプリ。Heroku有料化やユーザ数から2022年11月にサービスを終了した。',
    created_at: '2017-08',
    siteUrl: null,
    imageUrl:
      'https://raw.githubusercontent.com/mkan0141/toEmoji/master/image/sample.png',
    githubUrl: null,
    techList: ['PHP', 'bootstrap'],
  },
];

const variants = {
  onscreen: {
    transition: { staggerChildren: 0.1 },
  },
};

const Works = () => {
  return (
    <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl">
      <div>
        <h1 className="text-center text-4xl font-bold">Works</h1>
      </div>
      <div className="mt-8">
        <motion.ul
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="offscreen"
          animate="onscreen"
          variants={variants}
        >
          {WorksItemList.map(({ title, summary, description, imageUrl }) => (
            <Link href="/works/1" key={title}>
              <WorksCard
                title={title}
                summary={summary}
                description={description}
                imageUrl={imageUrl}
              />
            </Link>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Works;

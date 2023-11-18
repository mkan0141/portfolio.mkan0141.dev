import Link from 'next/link';

import { HoverAnimation } from '@/components/Animation';

type NavigationItem = {
  label: string;
  href: string;
};

const navigationList: NavigationItem[] = [
  { label: 'about', href: '/about' },
  { label: 'works', href: '/works' },
];

export const GlobalHeader = () => {
  return (
    <header className="text-md text-md flex justify-between px-6 py-10 tracking-widest sm:text-lg md:px-12">
      <div>
        <Link href="/">mkan0141.dev</Link>
      </div>
      <nav>
        <ul className="flex">
          {navigationList.map((navigation) => (
            <li
              key={navigation.href}
              className="[&:not(:first-child)]:ml-4 md:[&:not(:first-child)]:ml-8"
            >
              <Link href={navigation.href}>
                <HoverAnimation>{navigation.label}</HoverAnimation>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

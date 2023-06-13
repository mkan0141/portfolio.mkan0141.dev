import { HoverText } from '@/ui/HoverText';
import Link from 'next/link';

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
    <header className="flex justify-between px-12 py-10 text-lg tracking-widest">
      <div>
        <Link href="/">mkan0141.dev</Link>
      </div>
      <nav>
        <ul className="flex">
          {navigationList.map((navigation) => (
            <li key={navigation.href} className="[&:not(:first-child)]:ml-8">
              <Link href={navigation.href}>
                <HoverText>{navigation.label}</HoverText>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

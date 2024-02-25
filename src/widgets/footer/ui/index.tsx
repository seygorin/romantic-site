import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Icon } from '@/shared/ui/icon/';

export const Footer: React.FC = () => {
  const router = usePathname();

  return (
    <footer className="fixed bottom-0 w-full p-4">
      <div className="mx-auto max-w-screen-md flex justify-around items-center">
        <Link href="/section">
          <div
            className={`flex flex-col items-center space-y-2 ${
              router === '/section' ? 'text-red-500' : ''
            }`}
          >
            <Icon name="sections" width={30} />
            <span>Sections</span>
          </div>
        </Link>
        <Link href="/favorite">
          <div
            className={`flex flex-col items-center space-y-2 ${
              router === '/favorite' ? 'text-red-500' : ''
            }`}
          >
            <Icon name="favorites" width={28} />
            <span>Favorites</span>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`flex flex-col items-center space-y-2 ${
              router === '/' ? 'text-red-500' : ''
            }`}
          >
            <Icon name="main" width={25} />
            <span>Main</span>
          </div>
        </Link>
        <Link href="/cart">
          <div
            className={`flex flex-col items-center space-y-2 ${
              router === '/cart' ? 'text-red-500' : ''
            }`}
          >
            <Icon name="cart" width={30} />
            <span>Cart</span>
          </div>
        </Link>
        <Link href="/login">
          <div
            className={`flex flex-col items-center space-y-2 ${
              router === '/login' ? 'text-red-500' : ''
            }`}
          >
            <Icon name="profile" width={25} />
            <span>Profile</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

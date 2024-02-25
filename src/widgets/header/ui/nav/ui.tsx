'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Logo } from '../logo';

export const Navigation: React.FC = () => {
  const router = usePathname();

  return (
    <nav className="container flex items-center justify-between py-4 px-1">
      <div className="hidden md:block">
        <ul className="ml-1 flex items-center space-x-4">
          <li>
            <Link href="/section">
              <div
                className={`flex flex-col items-center space-y-2 ${
                  router === '/section' ? 'text-red-500' : ''
                }`}
              >
                <span>Section</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/favorite">
              <div
                className={`flex flex-col items-center space-y-2 ${
                  router === '/favorite' ? 'text-red-500' : ''
                }`}
              >
                <span>Favorite</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <div
                className={`flex flex-col items-center space-y-2 ${
                  router === '/cart' ? 'text-red-500' : ''
                }`}
              >
                <span>Cart</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <div
                className={`flex flex-col items-center space-y-2 ${
                  router === '/login' ? 'text-red-500' : ''
                }`}
              >
                <span>Login</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden ">
        <button className="text-black-300 hover:text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className="mx-auto">
        <Logo />
      </div>
    </nav>
  );
};

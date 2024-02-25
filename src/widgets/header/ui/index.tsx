import React from 'react';
import { Navigation } from './nav';
import { Notification } from './notification'
import { Search } from './search';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-5">
      <Navigation />
      <Search />
      <div className="flex space-x-4 items-center">
        <Notification />
      </div>
    </header>
  );
};

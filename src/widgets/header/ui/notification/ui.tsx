import Link from 'next/link';
import React from 'react';
import { Icon } from '@/shared/ui/icon/';

export const Notification: React.FC = () => {
  return (
    <Link href="/notification">
      <div className="flex flex-col items-center space-y-2">
        <Icon name="notification" width={30} />
      </div>
    </Link>
  );
};

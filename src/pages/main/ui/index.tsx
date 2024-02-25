import Image from 'next/image';
import React from 'react';

export const  Main = () => {
  return (
    <main className="flex-grow container mx-auto p-4">
        <Image
        src="/images/unknown2.png"
        width={500}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        <Image
        src="/images/images1.jpg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
      <h2 className="text-2xl font-bold">Welcome to My Website</h2>
      <p>This is a sample website using Next.js, TypeScript, and Tailwind CSS.</p>
    </main>
  );
};

export default Main;
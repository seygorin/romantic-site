import Head from 'next/head';
import type { PropsWithChildren } from 'react';
import '../../../app/styles/globals.css';
import { Footer } from '@/widgets/footer/';
import { Header } from '@/widgets/header';
import { roboto } from '../../../app/styles/fonts';

export function Layout({ children }: PropsWithChildren) {
  console.log('../../public/favicon.ico');
  return (
    <>
      <Head>
        <title>Romantic Flowers Shop</title>
        <meta name="description" content="Flowers Shop for you" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`${roboto}`}</style>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

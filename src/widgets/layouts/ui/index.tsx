import Head from 'next/head';
import type { PropsWithChildren } from 'react';
// eslint-disable-next-line
import '../../../app/styles/globals.css';
// eslint-disable-next-line
import { Footer } from '@/widgets/footer/';
// eslint-disable-next-line
import { Header } from '@/widgets/header';
// eslint-disable-next-line
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

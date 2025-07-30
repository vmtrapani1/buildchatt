import Head from 'next/head';
import Hero from '@/components/Hero';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>BuildChatt | Land For Sale in Chattanooga, TN</title>
        <meta name="description" content="Premium land listing in Chattanooga, TN" />
      </Head>
      <main className="relative min-h-screen overflow-hidden">
        <Header />
        <Hero />
      </main>
    </>
  );
}

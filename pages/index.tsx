import Head from 'next/head';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>BuildChatt</title>
      </Head>
      <main className="relative w-full min-h-screen overflow-hidden">
        <Hero />
      </main>
    </>
  );
}

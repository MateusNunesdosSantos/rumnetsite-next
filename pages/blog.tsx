import Head from 'next/head';

import Menu from '../src/components/Menu'

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog-Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
    </div>
  );
}

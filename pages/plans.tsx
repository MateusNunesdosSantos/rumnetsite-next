import Head from 'next/head';

import Menu from '../src/components/Menu'

export default function Plans() {
  return (
    <div>
      <Head>
        <title>Planos-Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
    </div>
  );
}

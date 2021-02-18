import Head from 'next/head';

import Menu from '../src/components/Menu'

export default function Institucional() {
  return (
    <div>
      <Head>
        <title>Institucional-Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
    </div>
  );
}

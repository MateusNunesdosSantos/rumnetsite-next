import Head from 'next/head';

import Menu from '../src/components/Menu'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contato-Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
    </div>
  );
}

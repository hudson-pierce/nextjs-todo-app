import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Header title='Home'></Header>
      </Layout>
    </div>
  );
}

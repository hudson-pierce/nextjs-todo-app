import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/menu/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
          <h1>Workout Like a Boss</h1>
      </Layout>
    </div>

  );
}

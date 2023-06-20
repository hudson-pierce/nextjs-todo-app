import Head from 'next/head';
import Layout from '../components/layout/Layout';

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

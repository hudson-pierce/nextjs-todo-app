import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';

export default function Home() {
  const title = 'Home';

  return (
    <Layout title={title}>
      <Header title={title}/>
    </Layout>
  );
}

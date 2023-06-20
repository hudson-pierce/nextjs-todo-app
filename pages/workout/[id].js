import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';

export default function WorkoutPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Workout ID: {id}</h1>
      {/* Your workout page content */}
    </Layout>
  );
}
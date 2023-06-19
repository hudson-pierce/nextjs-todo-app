import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Head>
            <title>Workout Like a Boss</title>
        </Head>
        <h1>Workout Like a Boss</h1>
        <ul>
          <li><Link href='/dashboard'>Dashboard</Link></li>
          <li><Link href='/exercises'>Exercises</Link></li>
          <li><Link href='/workouts'>Workouts</Link></li>
        </ul>
    </div>
  );
}

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Home</h1>
        <ul>
          <li><Link href='/exercises'>Exercises</Link></li>
          <li><Link href='/workouts'>Workouts</Link></li>
        </ul>
    </div>
  );
}
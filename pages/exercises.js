import Head from 'next/head';
import Link from 'next/link';

const title = "Exercises";

export default function Exercises() {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <Link href='/'>Home</Link>
        </div>
    );
}
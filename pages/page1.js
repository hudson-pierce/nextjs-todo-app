import Head from 'next/head';
import Link from 'next/link';

export default function A() {
    return (
        <div>
            <Head>
                <title>Page 1</title>
            </Head>
            <h1>Page 1</h1>
            <Link href='/'>Home</Link>
        </div>
    );
}
import React from 'react';
import Head from 'next/head';
import Header from '../common/Header';
import Menu from './Menu';

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Menu/>
      {children}
    </div>
  );
};

import React from 'react';
import Head from 'next/head';
import Header from '../common/Header';
import Menu from './Menu';

export default function Layout({ children, title }) {
  return (
    <div style={{ marginBottom: 150 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Menu/>
      <div style={{ paddingLeft: "10%", paddingRight: "10%"}}>
        {children}
      </div>
    </div>
  );
};

import React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Header from '../common/Header';
import Head from 'next/head';

export default function Layout({ children, title }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => router.push('/')} sx={{ textTransform: 'none' }}>
            Home
          </Button>
          <Button color="inherit" onClick={() => router.push('/workouts')} sx={{ textTransform: 'none' }}>
            Workouts
          </Button>
          <Button color="inherit" onClick={() => router.push('/dashboard')} sx={{ textTransform: 'none' }}>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '40px' }}>
        <Header title={title} />
        {children}
      </div>
    </div>
  );
};


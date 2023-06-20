import React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div>
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
      {children}
    </div>
  );
};


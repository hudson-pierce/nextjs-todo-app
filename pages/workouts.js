import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Layout from '../components/layout/Layout';
import Box from '@mui/material/Box';
import WorkoutCard from '../components/workouts/WorkoutCard';
import { WORKOUTS } from '../data/workouts';

export default function Workouts() {
  const [workouts, setWorkouts] = useState(WORKOUTS);

  const deleteWorkout = (workout) => {
    const newWorkouts = workouts.filter(e => e.name !== workout.name);
    setWorkouts(newWorkouts);
  }

  return (
    <Layout title='My Workouts'>
      <Grid container spacing={6}>
          {workouts.map((workout, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <WorkoutCard workout={workout} deleteWorkout={deleteWorkout}></WorkoutCard>
              </Box>
            </Grid>           
          ))}
      </Grid>
    </Layout>
  );
};

import { useState } from 'react';
import Layout from '../components/layout/Layout';
import WorkoutCard from '../components/workouts/WorkoutCard';
import Grid from '@mui/material/Grid';
import { WORKOUTS } from '../data/workouts';

export default function Workouts() {
  const [workouts, setWorkouts] = useState(WORKOUTS);

  const deleteWorkout = (workout) => {
    const newWorkouts = workouts.filter(e => e.name !== workout.name);
    setWorkouts(newWorkouts);
  }

  return (
    <Layout>
      <Grid container spacing={3}>
          {workouts.map((workout, index) => (
              <Grid item key={index} xs={10} sm={6} md={3}>
                  <WorkoutCard workout={workout} deleteWorkout={deleteWorkout}></WorkoutCard>
              </Grid>           
          ))}
      </Grid>
    </Layout>
  );
};

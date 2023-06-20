import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Layout from '../../components/layout/Layout';
import Header from '../../components/common/Header';
import ExerciseCard from '../../components/workouts/ExerciseCard';
import { WORKOUTS } from '../../data/workouts';
import { Typography } from '@mui/material';

export async function getServerSideProps(context) {
  const { id } = context.query;
  const workout = WORKOUTS.find(e => e.id === id);

  if (!workout) {
    return {
      notFound: true, // Return 404 page if workout is not found
    };
  }

  return {
    props: {
      workout,
    },
  };
}

export default function WorkoutPage({ workout }) {
  const [exercises, setExercises] = useState(null); // Set initial state as null

  const deleteExercise = (exercise) => {
    const newExercises = exercises.filter(e => e.name !== exercise.name);
    setExercises(newExercises);
  }

  useEffect(() => {
    if (workout) {
      setExercises(workout.exercises);
    }
  }, [workout]);

  if (!workout) {
    return (
      <Layout>
        <p>Workout not found</p>
      </Layout>
    );
  }

  if (exercises === null) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title={workout.name}></Header>
      <Grid container spacing={6}>
        {exercises.map((exercise, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <ExerciseCard exercise={exercise} deleteExercise={deleteExercise} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

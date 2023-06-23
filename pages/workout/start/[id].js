import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import CustomFab from '../../../components/common/CustomFab';
import Layout from '../../../components/layout/Layout';
import CustomGrid from '../../../components/common/CustomGrid';
import ExerciseCard from '../../../components/workouts/ExerciseCard';
import { WORKOUTS } from '../../../data/workouts';

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

export default function StartWorkoutPage({ workout }) {
  const [exercises, setExercises] = useState(workout.exercises);
  const router = useRouter();

  return (
    <Layout title={`Running ${workout.name}...`}>
      <div style={{ marginTop: 100 }}>
        <CustomGrid
          items={exercises}
          renderItem={(exercise) => (
            <ExerciseCard
              key={exercise.name}
              exercise={exercise}
              exercises={exercises}
              setExercises={setExercises}
              runningWorkout={true}
            />
          )}
        />
      </div>
      <div style={{ position: 'fixed', justifyContent: 'center', left: 0, right: 0, bottom: 40 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CustomFab color='error' onClick={() => router.push(`/workout/${workout.id}`)}>
            Cancel
          </CustomFab>
          <CustomFab color='primary' onClick={() => router.push(`/workout/${workout.id}`)}>
            Finish
          </CustomFab>
        </Box>
      </div>
    </Layout>
  );
}

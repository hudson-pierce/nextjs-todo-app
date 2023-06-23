import { useState } from 'react';
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
    </Layout>
  );
}

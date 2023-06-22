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

  const deleteExercise = (exercise) => {
    const newExercises = exercises.filter(e => e.name !== exercise.name);
    setExercises(newExercises);
  };

  const updateExercise = (updatedExercise) => {
    const updatedExercises = exercises.map(e => {
      if (e.name === updatedExercise.name) {
        return updatedExercise;
      }
      return e;
    });
    setExercises(updatedExercises);
  };

  return (
    <Layout title={`Running ${workout.name}...`}>
      <div style={{ marginTop: 100 }}>
        <CustomGrid
          items={exercises}
          renderItem={(exercise) => (
            <ExerciseCard
              key={exercise.name}
              exercise={exercise}
              deleteExercise={deleteExercise}
              updateExercise={updateExercise}
            />
          )}
        />
      </div>
    </Layout>
  );
}

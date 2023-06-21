import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import ExerciseCard from '../../components/workouts/ExerciseCard';
import CustomGrid from '../../components/common/CustomGrid';
import { WORKOUTS } from '../../data/workouts';

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
    <Layout title={workout.name}>
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
    </Layout>
  );
}

import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import ExerciseCard from '../../components/workouts/ExerciseCard';
import ExerciseForm from '../../components/workouts/ExerciseForm';
import CustomGrid from '../../components/common/CustomGrid';
import { WORKOUTS } from '../../data/workouts';
import Fab from '@mui/material/Fab';
import { EXERCISES } from '../../data/exercises';

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
  const [exerciseFormOpen, setExerciseFormOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState(EXERCISES[0]);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseSets, setExerciseSets] = useState(0);
  const [exerciseWeight, setExerciseWeight] = useState(0);

  const deleteExercise = (exercise) => {
    const newExercises = exercises.filter(e => e.name !== exercise.name);
    setExercises(newExercises);
  };

  const addExercise = () => {
    const updatedExercise = {
      id: Math.random().toString(),
      name: exerciseName,
      reps: exerciseReps,
      sets: exerciseSets,
      weight: exerciseWeight,
    };
    exercises.push(updatedExercise);
    setExerciseFormOpen(false)
  }

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
      <Fab variant='extended' color='success' onClick={() => setExerciseFormOpen(true)} sx={{ textTransform: 'none' }}>
        Add Exercise
      </Fab>
      {/* <Fab variant='extended' color='primary' onClick={() => setExerciseFormOpen(true)} sx={{ textTransform: 'none' }}>
        Save Workout
      </Fab>
      <Fab variant='extended' color='error' onClick={() => setExerciseFormOpen(true)} sx={{ textTransform: 'none' }}>
        Delete Workout
      </Fab> */}

      {exerciseFormOpen && <ExerciseForm 
        setExerciseName={setExerciseName}
        setExerciseReps={setExerciseReps}
        setExerciseSets={setExerciseSets}
        setExerciseWeight={setExerciseWeight}
        exerciseName={exerciseName}
        exerciseReps={exerciseReps}
        exerciseSets={exerciseSets}
        exerciseWeight={exerciseWeight}
        handleSaveChanges={addExercise}        
        isModalOpen={exerciseFormOpen}
        handleModalClose={() => setExerciseFormOpen(false)} />}
    </Layout>
  );
}

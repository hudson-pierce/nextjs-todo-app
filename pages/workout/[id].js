import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Layout from '../../components/layout/Layout';
import ExerciseCard from '../../components/workouts/ExerciseCard';
import ExerciseForm from '../../components/workouts/ExerciseForm';
import CustomGrid from '../../components/common/CustomGrid';
import { WORKOUTS } from '../../data/workouts';
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
  const router = useRouter();
  const [exercises, setExercises] = useState(workout.exercises);
  const [exerciseFormOpen, setExerciseFormOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState(EXERCISES[0]);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseSets, setExerciseSets] = useState(0);
  const [exerciseWeight, setExerciseWeight] = useState(0);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

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

  const saveWorkout = () => {
    router.push('/workouts');
  }

  const openDeleteConfirmation = () => {
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  const confirmDeleteWorkout = () => {
    router.push('/workouts');
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
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 40, left: 0, right: 0 }}>
        <Fab variant='extended' color='success' onClick={() => setExerciseFormOpen(true)} sx={{ textTransform: 'none', marginRight: '5%' }}>
          Add Exercise
        </Fab>
        <Fab variant='extended' color='primary' onClick={saveWorkout} sx={{ textTransform: 'none', marginRight: '5%' }}>
          Save Workout
        </Fab>
        <Fab variant='extended' color='error' onClick={openDeleteConfirmation} sx={{ textTransform: 'none'}}>
          Delete Workout
        </Fab>
      </Box>

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

      <Dialog
        open={deleteConfirmationOpen}
        onClose={closeDeleteConfirmation}
      >
        <DialogTitle>Delete Workout</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this workout?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between', display: 'flex', paddingBottom: 2}}>
          <Button onClick={closeDeleteConfirmation} variant='contained' sx={{textTransform: 'none', marginLeft: 3}}>Cancel</Button>
          <Button onClick={confirmDeleteWorkout} variant='contained' color="error" sx={{textTransform: 'none', marginRight: 3}}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}

import { useState } from 'react';
import { Typography } from '@mui/material';
import { CustomCard } from '../common/CustomCard';
import ExerciseForm from './ExerciseForm';

export default function ExerciseCard({ exercise, deleteExercise, updateExercise }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState(exercise.name);
  const [exerciseReps, setExerciseReps] = useState(exercise.reps);
  const [exerciseSets, setExerciseSets] = useState(exercise.sets);
  const [exerciseWeight, setExerciseWeight] = useState(exercise.weight);
  const [refreshToggle, setRefreshToggle] = useState(false);

  const handleDeleteExercise = () => {
    deleteExercise(exercise);
  };

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSaveChanges = () => {
    const updatedExercise = {
      ...exercise,
      name: exerciseName,
      reps: exerciseReps,
      sets: exerciseSets,
      weight: exerciseWeight,
    };
    updateExercise(updatedExercise);
    setModalOpen(false);
    setRefreshToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <CustomCard key={refreshToggle} title={exerciseName} onDelete={handleDeleteExercise} onClick={handleEditClick}>
        <Typography variant="body1" color="text.secondary">
          Reps: {exerciseReps}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sets: {exerciseSets}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Weight: {exerciseWeight} lbs
        </Typography>
      </CustomCard>

      <ExerciseForm
        setExerciseName={setExerciseName}
        setExerciseReps={setExerciseReps}
        setExerciseSets={setExerciseSets}
        setExerciseWeight={setExerciseWeight}
        exerciseName={exerciseName}
        exerciseReps={exerciseReps}
        exerciseSets={exerciseSets}
        exerciseWeight={exerciseWeight}
        handleSaveChanges={handleSaveChanges}
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

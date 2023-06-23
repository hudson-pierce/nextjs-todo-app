import { useState } from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { CustomCard } from '../common/CustomCard';
import ExerciseForm from './ExerciseForm';

export default function ExerciseCard({ exercise, exercises, setExercises, runningWorkout = false }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState(exercise.name);
  const [exerciseReps, setExerciseReps] = useState(exercise.reps);
  const [exerciseSets, setExerciseSets] = useState(exercise.sets);
  const [exerciseWeight, setExerciseWeight] = useState(exercise.weight);
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDeleteExercise = () => {
    deleteExercise(exercise);
  };

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const updateExercise = (updatedExercise) => {
    const updatedExercises = exercises.map((e) => {
      if (e.name === updatedExercise.name) {
        return updatedExercise;
      }
      return e;
    });
    setExercises(updatedExercises);
  };

  const deleteExercise = (exercise) => {
    const newExercises = exercises.filter((e) => e.name !== exercise.name);
    setExercises(newExercises);
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

  const markComplete = (event) => {
    event.stopPropagation();
    setIsDisabled((prevDisabled) => !prevDisabled);
  };

  const buttonColor = isDisabled ? 'gray' : 'primary.main';
  const buttonColorHover = isDisabled ? 'black' : 'primary.dark';

  return (
    <>
      <CustomCard
        key={refreshToggle}
        title={exerciseName}
        onDelete={handleDeleteExercise}
        onClick={handleEditClick}
        disable={isDisabled}
      >
        <Typography variant="body1" color="text.secondary">
          Reps: {exerciseReps}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sets: {exerciseSets}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Weight: {exerciseWeight} lbs
        </Typography>
        {runningWorkout && (
          <Button
            variant="outlined"
            size="medium"
            sx={{
              justifyContent: 'center',
              marginTop: '15px',
              textTransform: 'none',
              width: '265px',
              color: buttonColor,
              borderColor: buttonColor,
              '&:hover': {
                color: buttonColorHover,
                borderColor: buttonColorHover,
              }
            }}
            onClick={markComplete}
          >
            {isDisabled ? 'Undo' : 'Mark Complete'}
          </Button>
        )}
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

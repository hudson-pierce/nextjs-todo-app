import { useState } from 'react';
import { Typography, Modal, Box, Select, MenuItem, Button, TextField } from '@mui/material';
import { CustomCard } from '../common/CustomCard';
import { EXERCISES } from '../../data/exercises';

export default function ExerciseCard(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState(props.exercise.name);
  const [exerciseReps, setExerciseReps] = useState(props.exercise.reps);
  const [exerciseSets, setExerciseSets] = useState(props.exercise.sets);
  const [exerciseWeight, setExerciseWeight] = useState(props.exercise.weight);

  const handleDeleteExercise = () => {
    props.deleteExercise(props.exercise);
  };

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSaveChanges = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CustomCard title={exerciseName} onDelete={handleDeleteExercise} onClick={handleEditClick}>
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

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            outline: 'none',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Exercise
          </Typography>
          <Select
            id="exercise-name"
            name="name"
            value={exerciseName}
            onChange={(event) => setExerciseName(event.target.value)}
            fullWidth
            margin="normal"
          >
            {EXERCISES.map((exercise) => (
              <MenuItem key={exercise} value={exercise}>
                {exercise}
              </MenuItem>
            ))}
          </Select>
          <TextField
            name="reps"
            label="Reps"
            value={exerciseReps}
            onChange={(event) => setExerciseReps(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            name="sets"
            label="Sets"
            value={exerciseSets}
            onChange={() => setExerciseSets(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            name="weight"
            label="Weight"
            value={exerciseWeight}
            onChange={(event) => setExerciseWeight(event.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Box>
      </Modal>
    </>
  );
}

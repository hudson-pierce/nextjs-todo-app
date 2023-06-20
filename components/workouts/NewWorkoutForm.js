import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const NewWorkoutForm = ({ exercises, addExercise }) => {
  let id = 0;
  const [selectedExercise, setSelectedExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleExerciseChange = (event) => {
    setSelectedExercise(event.target.value);
  };

  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedExercise || !sets || !reps || !weight) {
      return;
    }

    const newExercise = {
      id: id++,
      name: selectedExercise,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseInt(weight),
    };

    addExercise(newExercise);

    setSelectedExercise('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add Exercise
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
          <InputLabel id="exercise-label">Exercise</InputLabel>
          <Select
            labelId="exercise-label"
            id="exercise"
            value={selectedExercise}
            onChange={handleExerciseChange}
            label="Exercise"
          >
            {exercises.map((exercise) => (
              <MenuItem key={exercise} value={exercise}>
                {exercise}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          type="number"
          label="Sets"
          value={sets}
          onChange={handleSetsChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          type="number"
          label="Reps"
          value={reps}
          onChange={handleRepsChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          type="number"
          label="Weight"
          value={weight}
          onChange={handleWeightChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{textTransform: 'none'}}>
          Add Exercise
        </Button>
      </form>
    </Box>
  );
};

export default NewWorkoutForm;

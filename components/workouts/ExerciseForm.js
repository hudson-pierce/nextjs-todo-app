import { Typography, Modal, Box, Select, MenuItem, Button, TextField } from '@mui/material';
import { EXERCISES } from '../../data/exercises';

export default function ExerciseForm({ 
    setExerciseName,
    setExerciseReps,
    setExerciseSets,
    setExerciseWeight,
    exerciseName,
    exerciseReps,
    exerciseSets,
    exerciseWeight,
    handleSaveChanges,
    isModalOpen,
    handleModalClose
}) {
    return (
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
                    onChange={(event) => setExerciseSets(event.target.value)}
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
    );
}
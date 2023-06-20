import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import WorkoutDetailsCard from './WorkoutDetailsCard';

export default function WorkoutDetails(props) {
    const [exercises, setExercises] = useState([]);

    const deleteExercise = (exercise) => {
        const newExercises = exercises.filter(e => e.name !== exercise.name);
        setExercises(newExercises);
    }

    useEffect(() => {
      setExercises(props.workout.exercises);
    }, [props.workout.exercises]);

    return (
        <div>
            <Grid container spacing={3}>
                {exercises.map((exercise, index) => (
                    <Grid item key={index} xs={10} sm={6} md={3}>
                        <WorkoutDetailsCard exercise={exercise} deleteExercise={deleteExercise} />
                    </Grid>           
                ))}
            </Grid>
            <Button>Start Workout</Button>
        </div>
    );
}

import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import WorkoutDetailsCard from './WorkoutDetailsCard';

export default function WorkoutDetails(props) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      setExercises(props.workout.exercises);
    }, [props.workout.exercises]);

    return (
        <div>
            <Grid container spacing={3}>
                {exercises.map((exercise, index) => (
                    <Grid item key={index} xs={10} sm={6} md={3}>
                        <WorkoutDetailsCard exercise={exercise} />
                    </Grid>           
                ))}
            </Grid>
            <Button>Start Workout</Button>
        </div>
    );
}

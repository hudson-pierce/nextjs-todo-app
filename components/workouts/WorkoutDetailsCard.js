import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function WorkoutDetailsCard(props) {
  const handleDeleteExercise = () => {
    props.deleteExercise(props.exercise);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
        <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h6" component="div">
                    {props.exercise.name}
                </Typography>
                <CardActions sx={{ display: 'flex' }}>
                <IconButton onClick={handleDeleteExercise} aria-label="Remove">
                    <CloseIcon fontSize="small" />
                </IconButton>
                </CardActions>
            </div>
            <Typography variant="body1" color="text.secondary">
                Reps: {props.exercise.reps}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Sets: {props.exercise.sets}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Weight: {props.exercise.weight} lbs
            </Typography>
        </CardContent>
    </Card>
  );
}

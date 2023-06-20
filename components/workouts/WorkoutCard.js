import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

export default function WorkoutCard(props) {
  const router = useRouter();

  const handleDeleteWorkout = () => {
    props.deleteWorkout(props.workout);
  };

  const handleCardClick = () => {
    router.push(`/workout/${props.workout.id}`);
  };

  return (
    <Card sx={{ maxWidth: 300 }} onClick={handleCardClick}>
        <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h6" component="div">
                    {props.workout.name}
                </Typography>
                <CardActions sx={{ display: 'flex' }}>
                <IconButton onClick={handleDeleteWorkout} aria-label="Remove">
                    <CloseIcon fontSize="small" />
                </IconButton>
                </CardActions>
            </div>
        </CardContent>
    </Card>
  );
}

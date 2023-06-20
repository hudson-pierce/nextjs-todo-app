import { Typography } from '@mui/material';
import { CustomCard } from '../common/CustomCard';

export default function ExerciseCard(props) {
  const handleDeleteExercise = () => {
    props.deleteExercise(props.exercise);
  };

  return (
    <CustomCard title={props.exercise.name} onDelete={handleDeleteExercise}>
      <Typography variant="body1" color="text.secondary">
        Reps: {props.exercise.reps}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Sets: {props.exercise.sets}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Weight: {props.exercise.weight} lbs
      </Typography>
    </CustomCard>
  );
}

import { useRouter } from 'next/router';
import { CustomCard } from '../common/CustomCard';

export default function WorkoutCard(props) {
  const router = useRouter();

  const handleDeleteWorkout = () => {
    props.deleteWorkout(props.workout);
  };

  const handleCardClick = () => {
    router.push(`/workout/${props.workout.id}`);
  };

  return (
    <CustomCard title={props.workout.name} onDelete={handleDeleteWorkout} onClick={handleCardClick}></CustomCard>
  );
}

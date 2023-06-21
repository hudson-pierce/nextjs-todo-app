import { useState } from 'react';
import Layout from '../components/layout/Layout';
import WorkoutCard from '../components/workouts/WorkoutCard';
import CustomGrid from '../components/common/CustomGrid';
import { WORKOUTS } from '../data/workouts';

export default function Workouts() {
  const [workouts, setWorkouts] = useState(WORKOUTS);

  const deleteWorkout = (workout) => {
    const newWorkouts = workouts.filter(e => e.name !== workout.name);
    setWorkouts(newWorkouts);
  }

  return (
    <Layout title='My Workouts'>
      <CustomGrid
        items={workouts}
        renderItem={(workout) => (
          <WorkoutCard workout={workout} deleteWorkout={deleteWorkout} />
        )}
      />
    </Layout>
  );  
};

import { useState } from 'react';
import Layout from '../components/layout/Layout';
import WorkoutCard from '../components/workouts/WorkoutCard';
import CustomGrid from '../components/common/CustomGrid';
import { WORKOUTS } from '../data/workouts';

export default function Workouts() {
  const [workouts, setWorkouts] = useState(WORKOUTS);

  const deleteWorkout = (workout) => {
    setWorkouts((prevWorkouts) => {
      const newWorkouts = prevWorkouts.filter((e) => e.id !== workout.id);
      return newWorkouts;
    });
  };

  return (
    <Layout title='My Workouts'>
      <CustomGrid
        items={workouts}
        renderItem={(workout) => (
          <WorkoutCard workout={workout} deleteWorkout={() => deleteWorkout(workout)} />
        )}
      />
    </Layout>
  );  
}

import { useState } from 'react';
import Layout from '../components/layout/Layout';
import WorkoutCard from '../components/workouts/WorkoutCard';
import CustomGrid from '../components/common/CustomGrid';
import Header from '../components/common/Header';
import { WORKOUTS } from '../data/workouts';

export default function Workouts() {
  const [workouts, setWorkouts] = useState(WORKOUTS);

  const deleteWorkout = (workout) => {
    setWorkouts((prevWorkouts) => {
      const newWorkouts = prevWorkouts.filter((e) => e.id !== workout.id);
      return newWorkouts;
    });
  };

  const title = 'My Workouts';

  return (
    <Layout title={title}>
      <Header title={title} />
      <CustomGrid
        items={workouts}
        renderItem={(workout) => (
          <WorkoutCard workout={workout} deleteWorkout={() => deleteWorkout(workout)} />
        )}
      />
    </Layout>
  );  
}

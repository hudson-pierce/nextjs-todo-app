import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Workouts.module.css';

const title = "Workouts";

const exerciseOptions = [
  'Push-ups',
  'Sit-ups',
  'Squats',
  'Lunges',
  'Plank',
  'Jumping Jacks',
];

export default function Workouts() {
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');
  const [workout, setWorkout] = useState([]);

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleRepsChange = (e) => {
    setReps(e.target.value);
  };

  const handleSetsChange = (e) => {
    setSets(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAddExercise = () => {
    if (exercise) {
      const newExercise = {
        exercise,
        reps,
        sets,
        weight,
      };
      setWorkout([...workout, newExercise]);
      setExercise('');
      setReps('');
      setSets('');
      setWeight('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can do something with the workout data, like sending it to an API
    console.log(workout);
    // Reset form fields
    setWorkout([]);
    setExercise('');
    setReps('');
    setSets('');
    setWeight('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <Link href='/'>Home</Link>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h2>Add a New Workout</h2>
        <div className={styles.formGroup}>
          <label htmlFor="exercise-select">Select an exercise:</label>
          <select
            id="exercise-select"
            className={styles.select}
            value={exercise}
            onChange={handleExerciseChange}
          >
            <option value="">-- Select an exercise --</option>
            {exerciseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="reps-input">Reps:</label>
          <input
            type="number"
            id="reps-input"
            className={styles.input}
            value={reps}
            onChange={handleRepsChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="sets-input">Sets:</label>
          <input
            type="number"
            id="sets-input"
            className={styles.input}
            value={sets}
            onChange={handleSetsChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="weight-input">Weight (lbs):</label>
          <input
            type="number"
            id="weight-input"
            className={styles.input}
            value={weight}
            onChange={handleWeightChange}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.addButton} onClick={handleAddExercise}>
            Add Exercise
          </button>
        </div>

        <div>
          <h3>Selected Exercises:</h3>
          {workout.length > 0 ? (
            <ul>
              {workout.map(({ exercise, reps, sets, weight }, index) => (
                <li key={index}>
                  <strong>{exercise}</strong> - Reps: {reps}, Sets: {sets}, Weight: {weight} lbs
                </li>
              ))}
            </ul>
          ) : (
            <p>No exercises selected.</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

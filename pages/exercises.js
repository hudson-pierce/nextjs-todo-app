import { useState } from 'react';

const Exercises = ({ addExercise }) => {
  const [exerciseName, setExerciseName] = useState('');

  const handleInputChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exerciseName) {
      addExercise(exerciseName);
      setExerciseName('');
    }
  };

  return (
    <div>
      <h2>Add Exercise</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="exerciseName">Exercise Name:</label>
        <input
          type="text"
          id="exerciseName"
          value={exerciseName}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Exercises;

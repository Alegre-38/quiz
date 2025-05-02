import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Score from './components/Score';
import questions from './data/questions';

function App() {
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleScoreUpdate = (newScore) => {
    setScore(newScore);
    setQuizCompleted(true);
  };

  return (
    <div className="App">
      <h1>Multiple-Choice Quiz App</h1>
      {quizCompleted ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Quiz questions={questions} onScoreUpdate={handleScoreUpdate} />
      )}
    </div>
  );
}

export default App;
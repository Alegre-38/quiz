import React from 'react';

const Score = ({ score, totalQuestions, onRetakeQuiz }) => {
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    return (
        <div className="score-container">
            <h2>Quiz Finished!</h2>
            <p>
                You scored {score} out of {totalQuestions}.
            </p>
            <p>Your percentage score is {percentage}%.</p>
            <button onClick={onRetakeQuiz} className="retake-button">
                Retake Quiz
            </button>
        </div>
    );
};

export default Score;
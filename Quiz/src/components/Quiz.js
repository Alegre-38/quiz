import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import questions from '../data/questions';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleAnswerSelection = (index) => {
        setSelectedAnswer(index);
        setShowCorrectAnswer(true);
        if (index === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleRetakeQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);
        setIsQuizFinished(false);
    };

    return (
        <div className="quiz-container">
            {isQuizFinished ? (
                <Score
                    score={score}
                    totalQuestions={questions.length}
                    onRetakeQuiz={handleRetakeQuiz}
                />
            ) : (
                <>
                    <Question
                        questionText={questions[currentQuestionIndex].question}
                        answerChoices={questions[currentQuestionIndex].answers}
                        correctAnswer={questions[currentQuestionIndex].correctAnswer}
                        onAnswerSelected={handleAnswerSelection}
                        selectedAnswer={selectedAnswer}
                        showCorrectAnswer={showCorrectAnswer}
                    />
                    {showCorrectAnswer && (
                        <button
                            onClick={handleNextQuestion}
                            className="next-button"
                        >
                            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Quiz;
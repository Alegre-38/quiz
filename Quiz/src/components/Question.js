import React from 'react';

const Question = ({
    questionText,
    answerChoices,
    correctAnswer,
    onAnswerSelected,
    selectedAnswer,
    showCorrectAnswer,
}) => {
    return (
        <div className="question-container">
            <h2>{questionText}</h2>
            <ul>
                {answerChoices.map((choice, index) => (
                    <li
                        key={index}
                        onClick={() => !showCorrectAnswer && onAnswerSelected(index)}
                        className={`answer ${
                            selectedAnswer === index ? 'selected' : ''
                        } ${
                            showCorrectAnswer && index === correctAnswer
                                ? 'correct'
                                : ''
                        } ${
                            showCorrectAnswer &&
                            selectedAnswer === index &&
                            index !== correctAnswer
                                ? 'incorrect'
                                : ''
                        }`}
                    >
                        {choice}
                    </li>
                ))}
            </ul>
            {showCorrectAnswer && (
                <p className="correct-answer">
                    Correct Answer: {answerChoices[correctAnswer]}
                </p>
            )}
        </div>
    );
};

export default Question;
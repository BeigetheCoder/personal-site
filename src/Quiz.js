// src/Quiz.js
import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Who is the main character of South Park?',
    options: ['Stan', 'Kyle', 'Cartman', 'Kenny'],
    answer: 'Stan'
  },
  {
    question: 'What episode did Kyle Broflovski get his mouth scar?',
    options: ['Season 12 Episode 7', 'Season 2 Episode 10', 'Season 15 Episode 1', 'Season 17 Episode 4'],
    answer: 'Season 15 Episode 1'
  },
  {
    question: 'Who is Cartmans stepbrother?',
    options: ['Kenny McCormick', 'Scott Tenorman', 'He has no stepbrother', "Scott Malkinson"],
    answer: 'Scott Tenorman'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    setCurrentQuestion(nextQuestion);
  };

  return (
    <div className="Quiz">
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;

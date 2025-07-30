import React from "react";
import "./Question.css";
import { useEffect, useState } from "react";
import correct from "./assets/correct.wav";
import wrong from "./assets/wrong.wav";

const Question = ({ question, correct_answer, incorrect_answers, currentQuestionIndex, setCurrentQuestionIndex, totalQuestions, }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [answerStatus, setAnswerStatus] = useState(null);

  const correctAudio = new Audio(correct);
  const wrongAudio = new Audio(wrong);


  useEffect(() => {
    const allAnswers = [...incorrect_answers, correct_answer];
    const shuffled = allAnswers.sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [question, correct_answer, incorrect_answers]);

  const handleAnswerClick = (answer) => {
    if (answer === correct_answer) {
      setAnswerStatus('correct')
      correctAudio.play()
    } else {
      wrongAudio.play();
      setAnswerStatus('wrong')
    }
  };

    setTimeout(() => setAnswerStatus(null), 1000);

  return (
    <div className="Card-main">
      <div className={`Card-question ${answerStatus}`}>
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="options">
          <div className="button-class">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ))}
          </div>
        </div>
        <div className="control-div">
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
            }
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) =>
                Math.min(prev + 1, totalQuestions - 1)
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;

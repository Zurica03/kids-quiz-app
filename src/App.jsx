import React, { useEffect } from "react";
import { useState } from "react";
import StartScreen from "./StartScreen";
import Categories from "./Categories";
import "./App.css";
import Question from "./Question";
import bgVideo from "./assets/stary-nights.mp4";

function App() {
  const [screen, setscreen] = useState("start");
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleStartClick = () => {
    setscreen("cat");
  };

  const handlequiz = (Category) => {
    setcategory(Category);
    setscreen("quiz");
  };

  useEffect(() => {
    if (category) {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
      )
        .then((res) => res.json())
        .then((res) => setdata(res.results))
        .catch((err) => console.log("No questions found", err));
    }
  }, [category]);

  return (
    <div className="AppWrapper">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="AppContent">
        {screen == "start" && <StartScreen onstart={handleStartClick} />}

        {screen == "cat" && <Categories onCategorySelect={handlequiz} />}

        {screen === "quiz" &&
          data.length > 0 &&
          data.map((item, index) => (
            <Question
              question={data[currentQuestionIndex].question}
              correct_answer={data[currentQuestionIndex].correct_answer}
              incorrect_answers={data[currentQuestionIndex].incorrect_answers}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              totalQuestions={data.length}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

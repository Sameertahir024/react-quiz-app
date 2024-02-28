import React, { useState } from "react";
import Questions from "../questions/Questions";
import Result from "../result/Result";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(1);
  const [rightAnswer, setrightAnswer] = useState();
  const [showResult, setShowResult] = useState(false);

  const updateCurrent = () => {
    if (!rightAnswer) {
      return alert("Please , Choose one of the following");
    }
    selectedAnswer();
    if (current < Questions.length - 1) {
      setCurrent(current + 1);
      //   setSelectedAnswerIndex();
    } else {
      setShowResult(true);
      setrightAnswer();
    }
  };
  const selectedAnswer = () => {
    if (rightAnswer === Questions[current].correctAnswer) {
      setScore(score + 1);
      setrightAnswer();
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrent(0);
    setrightAnswer(0);
    setScore(0);
  };

  return (
    <div className="max-w-screen-2xl text-[#070F2B] bg-[#7BD3EA] mx-auto h-screen flex flex-col items-center justify-center gap-5 ">
      {showResult ? (
        <>
          <Result
            score={score}
            totalScore={Questions.length}
            tryAgain={resetAll}
          />
        </>
      ) : (
        <>
          <h1 className="text-4xl font-extrabold border-black border-b-2 uppercase p-2">
            start quiz
          </h1>
          <div className="shadow-xl bg-[#FBF9F1] w-1/2 flex flex-col gap-6 items-center justify-center rounded-lg p-4">
            <div className="border-b-2 border-black  w-full p-3">
              <h1 className="flex items-center gap-5 text-xl font-bold">
                <span>{current + 1}:</span>
                {Questions[current].question}
              </h1>
            </div>
            <div className="w-full space-y-3 ">
              {Questions[current].options.map((option, index) => {
                return (
                  <div key={index}>
                    <h1
                      onClick={() => {
                        setrightAnswer(option);
                      }}
                      className="border-2 border-black border-opacity-30 text-sm font-semibold rounded-lg p-1 cursor-pointer hover:bg-[#7BD3EA]"
                    >
                      {option}
                    </h1>
                  </div>
                );
              })}
            </div>
            <button
              onClick={updateCurrent}
              className="bg-gray-100 border-2  border-black border-opacity-30 px-5 py-2 hover:bg-[#7BD3EA] duration-150 rounded-lg"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;

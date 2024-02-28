import React from "react";

const Result = ({ score, totalScore, tryAgain }) => {
  return (
    <div className="max-w-screen-2xl text-[#070F2B] bg-[#7BD3EA] mx-auto h-screen flex flex-col items-center justify-center gap-5 ">
      <div className="shadow-xl font-bold text-2xl uppercase bg-[#FBF9F1]  flex flex-col gap-6 items-center justify-center rounded-lg p-10">
        <h1>
          total score: <span>{score}</span>
        </h1>
        <h1>
          total Questions: <span>{totalScore}</span>{" "}
        </h1>
        <button
          className="bg-gray-100 border-2 border-black border-opacity-30 px-5 py-2 hover:bg-[#7BD3EA] duration-150 rounded-lg"
          onClick={tryAgain}
        >
          Reset all:
        </button>
      </div>
    </div>
  );
};

export default Result;

import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Score({ score, totalQuestion }) {
  // calculate the score percenetage 
  const scorePercentage = (score.totalCorrect / totalQuestion) * 100;

  return (
    <div className="h-screen w-screen bg-teal-900 flex justify-center items-center">
      <div className="relative w-full h-full md:w-[360px] md:h-[640px] flex flex-col justify-between items-center bg-[#AF9CF3]">
        <Image
          src="/decor.svg"
          alt="logo"
          width="360"
          height={120}
          className="absolute top-0"
        />
        <div className="relative mt-28 bg-white w-full h-full rounded-t-3xl p-4">
          <h2 className="text-center text-4xl md:text-2xl font-semibold mb-3">
            Your Result
          </h2>
          <div className="bg-[#44B77B] bg-opacity-20 rounded-md my-2 px-4 py-4 flex gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[#44B77B] rounded-full"></div>
              <div className="font-bold text-lg md:text-md">{score.totalCorrect}</div>
              <div className="font-semibold text-gray-500 text-lg md:text-sm">Correct</div>
            </div>
          </div>
          <div className="bg-[#FF3B3F] bg-opacity-20 rounded-md my-2 px-4 py-4 flex gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[#FF3B3F] rounded-full"></div>
              <div className="font-bold text-lg md: text-md">{score.totalIncorrect}</div>
              <div className="font-semibold text-gray-500 text-lg md:text-sm">
                Incorrect
              </div>
            </div>
          </div>
          <div className="m-4 w-40 h-40 md:w-32 md:h-32 mx-auto">
            <CircularProgressbar
              value={scorePercentage}
              text={`${Math.round(scorePercentage)}%`}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#44B77B",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
          {/* reload the site when clicking on start again button */}
          <button
            onClick={() => window.location.reload()}
            className="absolute bottom-4 bg-[#FF3B3F] w-[90%] font-bold text-white rounded-full py-2 flex justify-center text-md items-center px-4"
          >
            Start Again
          </button>
        </div>
      </div>
    </div>
  );
}

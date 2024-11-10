import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Report({ score, totalQuestion }) {
  const scorePercentage = (score.totalCorrect / totalQuestion) * 100;

  return (
    <div className="h-screen w-screen bg-teal-900 flex justify-center items-center">
      <div className="relative w-[360px] h-[640px] flex flex-col justify-between items-center bg-[#AF9CF3]">
        <Image
          src="/decor.svg"
          alt="logo"
          width="360"
          height={120}
          className="absolute top-0"
        />
        <div className="relative mt-28 bg-white w-full h-full rounded-t-3xl p-4">
          <h2 className="text-center text-2xl font-semibold">Your Result</h2>
          <div className="m-4">
            <ProgressBar
              completed={scorePercentage}
              bgColor="#44B77B"
              baseBgColor="#cccccc"
              height="20px"
              labelSize="12px"
              labelColor="#fff"
            />
          </div>
          <div className="bg-[#44B77B] bg-opacity-20 rounded-md mb-2 px-4 py-4 flex gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[#44B77B] rounded-full"></div>
              <div className="font-bold text-md">{score.totalCorrect}</div>
              <div className="font-semibold text-gray-500 text-sm">Correct</div>
            </div>
          </div>
          <div className="bg-[#FF3B3F] bg-opacity-20 rounded-md mb-1 px-4 py-4 flex gap-4">
            <p className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[#FF3B3F] rounded-full"></div>
              <div className="font-bold text-md">{score.totalIncorrect}</div>
              <div className="font-semibold text-gray-500 text-sm">
                Incorrect
              </div>
            </p>
          </div>
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

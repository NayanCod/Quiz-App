import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCureentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [report, setReport] = useState(null);

  const startQuiz = async () => {
    const res = await axios.post("/api/quiz/start");
    console.log(res.data);
    setQuizData(res.data);
    setAnswers([]);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="relative w-[360px] h-[640px] py-6 flex flex-col justify-between items-center bg-gradient-to-b from-[rgba(175,156,243,0)] to-[#AF9CF3] mix-blend-multiply">
        <div>
          <Image src="/Frame.png" alt="company logo" width={120} height={120} />
        </div>
        <div>
          <Image
            src="/startQuiz.svg"
            alt="start quiz img"
            width={160}
            height={160}
          />
        </div>
        <button
          className="bg-[#FF3B3F] w-[80%] font-bold text-white rounded-full py-2 text-lg"
          onClick={startQuiz}
        >
          Start
        </button>
      </div>
    </div>
  );
}

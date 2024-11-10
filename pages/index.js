import Question from "@/components/Question";
import Score from "@/components/Score";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);

  // make a post req on clicking start button
  const startQuiz = async () => {
    const res = await axios.post("/api/quiz/start");
    setQuizData(res.data);
  };

  // make a post req on clicking next button
  const handleAnswerSubmit = async(answer, timeTaken) => {
    // get the current question
    const currentQuestion = quizData.questions[currentQuestionIndex];

    const submitAnswer = await axios.post("/api/quiz/answer", {
      quizId: quizData.quizId,
      questionId: currentQuestion.id,
      selectedOptions: answer,
      timeTaken: timeTaken,
    });

    if (currentQuestionIndex + 1 < quizData.questions.length) {
      // move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // show the score after last question submission
      setScore(submitAnswer.data);
    }
  }

  // if score has value then render <Score/> component
  if (score) return <Score score={score} totalQuestion={quizData?.questions.length} />;

  // if quizData has value and currentQuestionIndex is less then all quesrions length then show the Question page component
  if(quizData && currentQuestionIndex < quizData.questions.length){
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
          <div className="relative mt-28 bg-white w-full h-full rounded-t-3xl">
            <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 bg-white flex items-center justify-center w-24 h-24 rounded-full border-8 border-green-300">
              <div className="flex items-end space-x-1 text-black">
                <span className="text-4xl font-bold">{currentQuestionIndex + 1}</span>
                <span className="text-gray-500 text-md font-bold">/{quizData.questions.length}</span>
              </div>
            </div>

            <div className="w-full mt-14 px-2">
              <Question
                question={quizData.questions[currentQuestionIndex]}
                quizId={quizData.quizId}
                onSubmitAnswer={handleAnswerSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show the home page
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="relative w-full h-full md:w-[360px] md:h-[640px] py-6 flex flex-col justify-between items-center bg-gradient-to-b from-[rgba(175,156,243,0)] to-[#AF9CF3] mix-blend-multiply">
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

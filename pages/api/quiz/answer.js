import {
  getCounters,
  incrementCorrect,
  incrementIncorrect,
  resetCounters,
} from "@/components/counter";
import { questions } from "./start";

export default function questionAnswered(req, res) {
  if (req.method === "POST") {
    const { questionId, selectedOptions, timeTaken } = req.body;
    const question = questions.find((question) => question.id === questionId);

    if (!question) {
      return res.status(404).json({ message: "Question not found!" });
    }
    const isCorrect =
      JSON.stringify(selectedOptions.sort()) ===
      JSON.stringify(question.answer.sort());

    if (isCorrect) {
      incrementCorrect();
    } else {
      incrementIncorrect();
    }

    const isLastQuestion = questions[questions.length - 1].id === questionId;

    if (isLastQuestion) {
      const { correct, inCorrect } = getCounters();
      res.status(200).json({
        message: "Quiz completed!",
        totalCorrect: correct,
        totalIncorrect: inCorrect,
      });
      resetCounters();
    } else {
      const { correct, inCorrect } = getCounters();
      res.status(200).json({
        message: isCorrect ? "Correct answer!" : "Incorrect answer!",
        correctCount: correct,
        inCorrectCount: inCorrect,
        timeTaken: timeTaken,
      });
    }
  } else {
    res.status(500).json({ message: "Method is not allowes!" });
  }
}

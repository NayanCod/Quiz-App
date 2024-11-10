import {
  getCounters,
  incrementCorrect,
  incrementIncorrect,
  resetCounters,
} from "@/components/counter";
import { questions } from "./start";

export default function questionAnswered(req, res) {
  if (req.method === "POST") {
    // Destructure the necessary fields from the request body
    const { questionId, selectedOptions, timeTaken } = req.body;
    const question = questions.find((question) => question.id === questionId);

    // If the question is not found, return a 404 response with a message
    if (!question) {
      return res.status(404).json({ message: "Question not found!" });
    }
    const isCorrect =
      JSON.stringify(selectedOptions.sort()) ===
      JSON.stringify(question.answer.sort());

    // If the answer is correct, increment the correct answer counter
    if (isCorrect) {
      incrementCorrect();
    } else {
       // If the answer is incorrect, increment the incorrect answer counter
      incrementIncorrect();
    }

     // Check if the current question is the last one in the list
    const isLastQuestion = questions[questions.length - 1].id === questionId;

    if (isLastQuestion) {
      // If it's the last question, get the current counters and send the result
      const { correct, inCorrect } = getCounters();
      res.status(200).json({
        message: "Quiz completed!",
        totalCorrect: correct,
        totalIncorrect: inCorrect,
      });
      // Reset the counters after the quiz is complete
      resetCounters();
    } else {
      // If it's not the last question, get the counters and send a response
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

import { questions } from "./start";

let correct = 0;
let inCorrect = 0;

export default function questionAnswered(req, res){
    if(req.method === 'POST'){
        const {quizId, questionId, selectedOptions, timeTaken} = req.body;

        const question = questions.find((question) => question.id === questionId);

        if(!question){
            return res.status(404).json({message: "Question not found!"});
        }
        const isCorrect = JSON.stringify(selectedOptions.sort()) === JSON.stringify(question.answer.sort());

        if(isCorrect){
            correct+=1;
        }else{
            inCorrect+=1;
        }

        res.status(200).json({
            message: isCorrect ? 'Correct answer!' : 'Incorrect answer!',
            correctCount: correct,
            inCorrectCount: inCorrect,
            timeTaken: timeTaken, 
        });
    }else{
        res.status(500).json({message: "Method is not allowes!"});
    }
}
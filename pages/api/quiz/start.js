import {v4 as uuidv4} from 'uuid';

export default function startQuiz(req, res){
    if(req.method === 'POST'){
        const quizId = uuidv4();
        const questions = [
            {
              id: '1',
              questionText: 'What is the main purpose of React?',
              options: [
                'To build backend applications',
                'To manage data in a SQL database',
                'To create interactive user interfaces',
                'To design server-side scripts'
              ],
              answer: [2], // Index of the correct answer in the options array
              type: 'single', // Only one correct answer
            },
            {
              id: '2',
              questionText: 'Which of the following is used to manage state in a React function component?',
              options: [
                'this.setState',
                'useState',
                'state property',
                'componentDidMount'
              ],
              answer: [1],
              type: 'single',
            },
            {
              id: '3',
              questionText: 'Which lifecycle method is called only once in the component lifecycle?',
              options: [
                'componentWillReceiveProps',
                'componentWillUnmount',
                'componentDidUpdate',
                'componentDidMount'
              ],
              answer: [3],
              type: 'single',
            },
            {
              id: '4',
              questionText: 'Which of the following statements about React hooks is correct?',
              options: [
                'Hooks can be used in both class and function components',
                'Hooks must be called in the same order on every render',
                'Hooks must only be used in the constructor',
                'Hooks replace JSX'
              ],
              answer: [1],
              type: 'single',
            },
            {
              id: '5',
              questionText: 'Which of these are commonly used hooks in React? (Choose all that apply)',
              options: [
                'useEffect',
                'useState',
                'componentWillMount',
                'useContext'
              ],
              answer: [0, 1, 3],
              type: 'multiple',
            }
        ];
        res.status(200).json({quizId: quizId, questions: questions});
    }else{
        res.status(500).json({message: "Method is not allowes!"});
    }
}
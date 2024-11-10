import {v4 as uuidv4} from 'uuid';
export const questions = [
    {
      id: '1',
      questionText: 'What is the main purpose of React?',
      image: null,
      options: [
        'To build backend applications',
        'To manage data in a SQL database',
        'To create interactive user interfaces',
        'To design server-side scripts'
      ],
      answer: [2], 
      type: 'single', 
    },
    {
      id: '2',
      questionText: 'Which of the following is used to manage state in a React function component?',
      image: null,
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
      questionText: 'What is the process called when React compares Virtual DOM changes to the Real DOM?',
      image: 'https://static.javatpoint.com/interview/images/react-interview-questions2.jpg',
      options: [
        'Diffing',
        'Reconciliation',
        'Rendering',
        'Hydration'
      ],
      answer: [1],
      type: 'single',
    },
    {
      id: '4',
      questionText: 'Which of the following statements about React hooks is correct?',
      image: null,
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
      image: null,
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
export default function startQuiz(req, res){
    if(req.method === 'POST'){
        const quizId = uuidv4();
        res.status(200).json({quizId: quizId, questions: questions});
    }else{
        res.status(500).json({message: "Method is not allowes!"});
    }
}
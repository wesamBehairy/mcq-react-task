import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../store/slices/quizState.slice';
// import { useState, useEffect } from 'react';
// import { finishGame } from '../../store/slices/gameState.slice';

const QuizPage = () => {

    // const [timeLeft, setTimeLeft] = useState(60);

    const dispatch = useDispatch();

    const question = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex].question
    );

    let IN_answers = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex].incorrect_answers
    );

    let CO_answers = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex].correct_answer
    );

    const answers = IN_answers.concat(CO_answers);

    const answerHandler = (answer) => {
        dispatch(answerQuestion({ answer }));
    };


    return (
        <React.Fragment>
            <p className='p-7 bg-white rounded shadow p-2 mt-5'
                dangerouslySetInnerHTML={{ __html: question }}></p>

            <h2 style={{ color: 'white' }}> the answers </h2>

            <div > {answers.map(answer =>

                <button
                    key={answer}
                    className='shadow p-2 btn btn-secondary m-3'
                    onClick={() => answerHandler(answer)}
                >
                    {answer}
                </button>
            )}
            </div>

        </React.Fragment>
    )

}

export default QuizPage;
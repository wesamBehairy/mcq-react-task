import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../store/slices/quiz.slice';
import classes from './startPage.module.css';
import { Button, Form } from 'react-bootstrap';

const StartPage = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');

    const startQuizHandler = () => {
        const w = prompt(" what is your name :)");

        if (w === null || w === '') {
            return;
        }

        dispatch(startQuiz({ username }));
    };

    return (
        <React.Fragment>

            <Button variant="danger" onClick={startQuizHandler} className='mt-4 mb-5'>
                Start QUIZ
            </Button>


            {/* <div className={classes.frame}>

                <Form className='col-lg-5 mx-auto mt-5'>
                    <Form.Group className="mb-3">
                        <Form.Label className={classes.head}>User Name</Form.Label>
                        <Form.Control placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Button variant="danger" onClick={startQuizHandler} className='mt-4 mb-5'>
                        Start QUIZ
                    </Button>

                </Form>

            </div> */}

        </React.Fragment>
    )

}

export default StartPage;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../store/slices/quiz.slice';
import classes from './startPage.module.css';
import { Button, Form } from 'react-bootstrap';

const StartPage = () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const startQuizHandler = () => {
        dispatch(startQuiz({ username }));
    };

    return (
        <React.Fragment>

            <div className={classes.frame}>

                <Form className='col-lg-5 mx-auto mt-5'>
                    <Form.Group className="mb-3"  required>
                        <Form.Label className={classes.head}>User Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </Form.Group>

                    <Button variant="danger" onClick={startQuizHandler} className='mt-4 mb-5'>
                        Start QUIZ
                    </Button>

                </Form>

            </div>

        </React.Fragment>
    )

}

export default StartPage;
import React from "react";
import StartPage from "./startPage";
import QuizPage from "./QuizPage";
import EndPage from "./Endpage";
import { useSelector } from 'react-redux';
import * as stages from '../utils/constants';
import { Container, Row } from 'react-bootstrap';


const Home = () => {

    const currentStage = useSelector(state => state.quizState.stage);

    let displayedPage;
    switch (currentStage) {
        case stages.START_QUIZ:
            displayedPage = <StartPage />;
            break;
        case stages.QUIZ:
            displayedPage = <QuizPage />;
            break;
        case stages.END_QUIZ:
            displayedPage = <EndPage />;
            break;
        default:
            break;
    }


    return (
        <React.Fragment>
            <Container>

                <Row className="mt-5">
                    <div >
                        <h1 style={{ color: 'white', textAlign: 'center' }} > MCQ APP</h1>
                    </div>
                </Row>

                <Row>  {displayedPage} </Row>

            </Container>
        </React.Fragment>
    );
};

export default Home;
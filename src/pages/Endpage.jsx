import React from "react";
import { useSelector } from 'react-redux';

const EndPage = () => {

    const score = useSelector((state) => state.quiz.score);

    return (
        <React.Fragment>
            <div style={{border:'2px dashed #fff' , marginTop:'50px'}}>
                <h2 style={{ color: 'white', textAlign: 'center' }}> thank you  </h2>
                <p style={{ color: 'white', textAlign: 'center' }}> your score is {score} </p>
            </div>
        </React.Fragment>

    )
}

export default EndPage;
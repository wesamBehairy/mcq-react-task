import { all } from 'redux-saga/effects';
import startQuiz from './saga/QuizInit.saga';
import quizSaga from './saga/Quiz.saga';


export default function* rootSaga() {
      yield all([startQuiz() , quizSaga()]);
} 
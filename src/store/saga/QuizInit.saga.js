import { take, fork, call, put } from 'redux-saga/effects';
import { startQuiz } from '../slices/quiz.slice';
import { fetchQuiz } from '../../utils/api';
import { fetchQuestionsFail, fetchQuestionsSuccess, } from '../slices/quizState.slice';


function* fetchQuestionSaga() {
    try {
        const data = yield call(fetchQuiz);
        yield put(fetchQuestionsSuccess(data));
        console.log(data);
    } catch (error) {
        fetchQuestionsFail('There was an error')
    }
}

// function* cancelFetchQuiz(fetchQuiz) {
//     while (true) {
//         yield take(cancelFetchQuestions.type);
//         yield cancel(fetchQuiz);
//     }
// }

export default function* startGameSaga() {
    while (true) {
        yield take(startQuiz.type);
        yield fork(fetchQuestionSaga);
        // yield fork(cancelFetchQuiz, fetch);
    }
}
import { combineReducers } from 'redux';
import quizState from './slices/quiz.slice';
import quiz from './slices/quizState.slice';

export default combineReducers({ quizState, quiz });
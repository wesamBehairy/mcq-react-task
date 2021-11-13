import { createSlice } from '@reduxjs/toolkit';
import * as stages from '../../utils/constants';
import { fetchQuestionsSuccess, fetchQuestionsFail } from './quizState.slice';

const initialState = {
    stage: stages.START_QUIZ,
    username: '',
};

const quizState = createSlice({
    name: 'quizState',
    initialState,
    reducers: {
        startQuiz(state, action) {
            state.username = action.payload.username;
            state.stage = stages.FETCHING_QUIZ_DATA;
        },
        finishGame(state) {
            state.stage = stages.END_QUIZ;
        },
        restartGame(state) {
            state.stage = stages.START_QUIZ;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestionsSuccess, (state) => {
                state.stage = stages.QUIZ;
            })
            .addCase(fetchQuestionsFail, (state) => {
                state.stage = stages.START_QUIZ;
            });
    },
});

export const {
    startQuiz,
    // cancelFetchQuestions,
    finishGame,
    restartGame,
} = quizState.actions;

export default quizState.reducer;
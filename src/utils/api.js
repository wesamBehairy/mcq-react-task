const apiUrl = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple';

export const fetchQuiz = () => {
  return fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((loadedQuestions) => loadedQuestions.results)
    .catch((error) => Promise.reject(error));
};
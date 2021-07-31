const newSurveyButton = document.querySelector('#start-here-btn');

async function newSurveyHandler(event) {
  event.preventDefault();

  console.log('Test');
  // const newSurveyName = document.querySelector('.surv-name');
  // const newSurveyQuestion = document.querySelector('#question');
  // const newSurveyAnswerOption = document.querySelector('#option');

  // const response = await fetch('/api/survey', {
  //   method: 'get',
  //   Headers: { 'Content-Type': 'application/json' },
  // });
  // if (response.ok) {

  document.location.replace('/survey');
  // } else {
  //   alert(response.statusText);
  // }
}
newSurveyButton.addEventListener('click', newSurveyHandler);

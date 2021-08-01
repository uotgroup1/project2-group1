const newViewButton = document.querySelector('#view-btn');

async function viewSurveyHandler(event) {
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

  document.location.replace('/viewsurvey');
  // } else {
  //   alert(response.statusText);
  // }
}
newViewButton.addEventListener('click', viewSurveyHandler);
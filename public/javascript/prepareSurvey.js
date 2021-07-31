const newSurveyButton = document.querySelector('#save-surv-btn');

async function newSurveyHandler(event) {
  event.preventDefault();

  const newSurveyName = document.querySelector('#surv-name').value.trim();
  const newSurveyQuestion = document.querySelector('#question').value.trim();
  const newSurveyAnswerOption = document.querySelector('#option').value.trim();
  console.log(newSurveyName);
  const response = await fetch('/api/survey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      newSurveyName,
      newSurveyQuestion,
      newSurveyAnswerOption,
    }),
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

newSurveyButton.addEventListener('click', newSurveyHandler);

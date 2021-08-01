const newSurveyButton = document.querySelector('#save-surv-btn');

async function newSurveyHandler(event) {
  event.preventDefault();

  const newSurveyName = document.querySelector('#surv-name').value.trim();
  const newSurveyQuestion = document.querySelector('#question').value.trim();
  const Option1 = document.querySelector('#optionone').value.trim();
  const Option2 = document.querySelector('#optiontwo').value.trim();
  const Option3 = document.querySelector('#optionthree').value.trim();
  const Option4 = document.querySelector('#optionfour').value.trim();
  console.log(Option1, Option2);
  const response = await fetch('/api/survey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      newSurveyName,
      newSurveyQuestion,
      // newSurveyAnswerOption,
      Option1,
      Option2,
      Option3,
      Option4,
    }),
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

newSurveyButton.addEventListener('click', newSurveyHandler);

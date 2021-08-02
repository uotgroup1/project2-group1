//edit survey fxn
const surveyID = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const editFormHandler = async function (event) {
  event.preventDefault();

  const newSurveyName = document.querySelector('#surv-name').value.trim();
  const newSurveyQuestion = document.querySelector('#question').value.trim();
  const Option1 = document.querySelector('#optionone').value.trim();
  const Option2 = document.querySelector('#optiontwo').value.trim();
  const Option3 = document.querySelector('#optionthree').value.trim();
  const Option4 = document.querySelector('#optionfour').value.trim();
  // const body = document.querySelector('question').value;

  if (!newSurveyName || !newSurveyQuestion || !Option1
    || !Option2|| !Option3|| !Option4) {
    alert("Please fill empty Field")
    return
  }
  await fetch(`/api/survey/${surveyID}`, {
    method: 'PUT',
    body: JSON.stringify({
      newSurveyName,
      newSurveyQuestion,
      Option1,
      Option2,
      Option3,
      Option4,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#save-surv-btn')
  .addEventListener('click', editFormHandler);

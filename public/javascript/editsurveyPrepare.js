//edit survey fxn
const surveyID = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const editFormHandler = async function (event) {
  event.preventDefault();

  const newSurveyName = document.querySelector('#surv-name').value;
  const newSurveyQuestion = document.querySelector('#question').value;
  const Option1 = document.querySelector('#optionone').value;
  const Option2 = document.querySelector('#optiontwo').value;
  const Option3 = document.querySelector('#optionthree').value;
  const Option4 = document.querySelector('#optionfour').value;
  // const body = document.querySelector('question').value;

  console.log(surveyID);
  console.log('hello');
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

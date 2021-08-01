//edit survey fxn
const surveyID = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const editFormHandler = async function (event) {
  event.preventDefault();

  const surveyName = document.querySelector('#surv-name').value;
  const question = document.querySelector('#question').value;
  const Option1 = document.querySelector('#optionone').value;
  const Option2 = document.querySelector('#optiontwo').value;
  const Option3 = document.querySelector('#optionthree').value;
  const Option4 = document.querySelector('#optionfour').value;
  const body = document.querySelector('question').value;

  await fetch(`/api/survey/${surveyID}`, {
    method: 'PUT',
    body: JSON.stringify({
      surveyName,
      question,
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

const deleteClickHandler = async function () {
  await fetch(`/api/survey/${surveyID}`, {
    method: 'DELETE',
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#save-surv-btn')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);

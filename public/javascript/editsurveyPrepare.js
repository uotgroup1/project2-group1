//edit survey fxn
const surveyID = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('surv-name').value;
  const body = document.querySelector('question').value;

  await fetch(`/api/post/${surveyID}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
  await fetch(`/api/post/${surveyID}`, {
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

//edit survey fxn
// const surveyID = window.location.toString().split('/')[
//   window.location.toString().split('/').length - 1
// ];

// const editFormHandler = async function (event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const body = document.querySelector('textarea[name="post-body"]').value;

//   await fetch(`/api/post/${surveyID}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   document.location.replace('/dashboard');
// };

// const deleteClickHandler = async function () {
//   await fetch(`/api/post/${surveyID}`, {
//     method: 'DELETE',
//   });

//   document.location.replace('/dashboard');
// };

// document
//   .querySelector('#update-btn')
//   .addEventListener('submit', editFormHandler);
// document
//   .querySelector('#delete-btn')
//   .addEventListener('click', deleteClickHandler);

const newUpdateButton = document.querySelector('#update-btn');

async function newUpdateHandler(event) {
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

  document.location.replace('/updatesurvey');
  // } else {
  //   alert(response.statusText);
  // }
}
newUpdateButton.addEventListener('click', newUpdateHandler);

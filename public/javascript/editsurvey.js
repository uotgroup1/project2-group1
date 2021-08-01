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

const newUpdateButton = document.querySelector('#save-surv-btn');

async function newUpdateHandler(event) {
  event.preventDefault();

  const surveyID = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log( 'iddddddddddddd' + surveyID);

  const newSurveyName = document.querySelector('#surv-name').value;
  const newSurveyQuestion = document.querySelector('#question').value;
  const Option1 = document.querySelector('#optionone').value;
  const Option2 = document.querySelector('#optiontwo').value;
  const Option3 = document.querySelector('#optionthree').value;
  const Option4 = document.querySelector('#optionfour').value;

<<<<<<< HEAD
  await fetch(`/api/survey/${surveyID}`, {
    method: 'PUT',
    body: JSON.stringify({
      newSurveyQuestion,
      newSurveyName,
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

=======
>>>>>>> a825084e93a4732612c328201c12620259885407
  document.location.replace('/dashboard');
  // } else {
  //   alert(response.statusText);
  // }
}
newUpdateButton.addEventListener('click', newUpdateHandler);

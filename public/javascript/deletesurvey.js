//delete survey fxn
// const id = window.location.toString().split('/')[
//   window.location.toString().split('/').length - 1
// ];
const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];
const deleteFormHandler = async function deleteSurveyHandler(event) {
  event.preventDefault();
  //need to define a constant which identifies which survey to delete
  //once we set up the id we can traverse through the DOM to get the ID?
  await fetch(`/api/survey/${surveyID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};
document
  .querySelector('#delete-surv-btn')
  .addEventListener('click', deleteFormHandler);

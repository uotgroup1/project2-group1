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
<<<<<<< HEAD
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]; //once we set up the id we can traverse through the DOM to get the ID?
  const response = await fetch(`api/survey/${id}`, {
    //which survey we want to delete
=======
  //once we set up the id we can traverse through the DOM to get the ID?
  await fetch(`/api/survey/${surveyID}`, {
>>>>>>> a825084e93a4732612c328201c12620259885407
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
<<<<<<< HEAD
  if (response.ok) {
    document.location.replace('/Dashboard'); //if response is ok take them back to their own dashboard
  } else {
    alert(response.statusText);
  }
}
=======
>>>>>>> a825084e93a4732612c328201c12620259885407

  document.location.replace('/dashboard');
};
document
<<<<<<< HEAD
  .querySelector('#del-surv-btn')
  .addEventListener('click', deleteSurveyHandler);
=======
  .querySelector('#delete-surv-btn')
  .addEventListener('click', deleteFormHandler);
>>>>>>> a825084e93a4732612c328201c12620259885407

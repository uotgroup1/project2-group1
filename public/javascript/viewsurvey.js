const newViewButton = document.querySelector('#view-btn');

async function viewSurveyHandler(event) {
  event.preventDefault();

  document.location.replace('/viewsurvey');
  // } else {
  //   alert(response.statusText);
  // }
}
newViewButton.addEventListener('click', viewSurveyHandler);
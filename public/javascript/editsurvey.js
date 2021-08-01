const newUpdateButton = document.querySelector('#save-surv-btn');

async function newUpdateHandler(event) {
  event.preventDefault();

  const surveyID = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log('iddddddddddddd' + surveyID);

  const newSurveyName = document.querySelector('#surv-name').value;
  const newSurveyQuestion = document.querySelector('#question').value;
  const Option1 = document.querySelector('#optionone').value;
  const Option2 = document.querySelector('#optiontwo').value;
  const Option3 = document.querySelector('#optionthree').value;
  const Option4 = document.querySelector('#optionfour').value;

  document.location.replace('/dashboard');
  // } else {
  //   alert(response.statusText);
  // }
}
newUpdateButton.addEventListener('click', newUpdateHandler);

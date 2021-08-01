const btn = document.querySelector('#save-surv-btn');
 
async function saveResults(event) {
  event.preventDefault();

  // get our survey id from url
  const surveyID = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];
  
  // get our value from radio button
  const rbs = document.querySelectorAll('input[name="flexRadio"]');
  let selectedValue;
  for (const rb of rbs) {
      if (rb.checked) {
          selectedValue = rb.value;
          break;
      }
  }

  const response = await fetch('/api/survey/results', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "survey_id": surveyID,
      "answer": selectedValue
    }),
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
console.log(selectedValue)
}

btn.addEventListener('click', saveResults);
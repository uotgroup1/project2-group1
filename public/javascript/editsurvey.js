//edit survey fxn
async function editSurveyHandler (event) {
event.preventDefault()
const titleId = ['traverse here through the DOM to get the ID of the question']
const currentTitle = document.querySelector(`#${titleId}`).value().trim()
const questionId = ['traverse here through the DOM to get the ID of the question']
const currentQuestion = document.querySelector(`#${questionId}`).value().trim()
const AnswerId = ['traverse here through the DOM to get the ID of the question']
const currentAnswer = document.querySelector(`#${AnswerId}`).value().trim()

const response = await fetch('', {
method:'PUT',
body:JSON.stringify({
    currentTitle,currentQuestion,currentAnswer
}),
Headers:{ 'Content-Type': 'application/json'}
})
if(response.ok) {
    document.location.replace('/userDashboard')
}
else {
    alert(response.statusText)
}
}

document.querySelector('#save-btn').addEventListener('click', editSurveyHandler)
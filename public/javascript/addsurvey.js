//new survey fxn
await function newSurveyHandler (event) {
event.preventDefault()

const newSurveyName = document.querySelector('.surv-name') 
const newSurveyQuestion = document.querySelector('#question')
const newSurveyAnswerOption = document.querySelector('#option')

const response = await fetch ('/api/surveys', {
    method:'post',
    body:JSON.stringify({
        newSurveyName,newSurveyQuestion,newSurveyAnswerOption
    }),
    Headers:{"Content-Type":"application/json"}
})
    if (response.ok) {
        document.location.replace('/userDashboard')
    }
    else {
        alert(response.statusText);
    }
}
document.querySelector('#save-surv-btn').addEventListener('click', newSurveyHandler)
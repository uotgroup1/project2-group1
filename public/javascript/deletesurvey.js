//delete survey fxn
async function deleteSurveyHandler (event) {
event.preventDefault()
//need to define a constant which identifies which survey to delete
const id = [] //once we set up the id we can traverse through the DOM to get the ID?
const response = await fetch(`api/surveys/delete/${id}`, {//which survey we want to delete
method:'post'
})
if (response.ok) {
    document.location.replace('/userDashboard')//if response is ok take them back to their own dashboard
}
else {
    alert(response.statusText)
}
}

document.querySelector('#delete-btn').addEventListener('click', deleteSurveyHandler)
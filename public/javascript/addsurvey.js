
async function newFormHandler(event) {
    event.preventDefault();
    console.log('HI')
    // const title = document.querySelector('input[name"surv-name"]').value;
    // const question = document.querySelector('input[name="question"]').value;
    // const option = document.querySelector('input[name="option"]').value;

    const title = document.querySelector('input[name"surv-name"]').value;
    const question = document.querySelector('input[name="question"]').value;
    const option = document.querySelector('input[name="option"]').value;

    const response = await fetch(`/api/survey`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            question,
            option
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

function addQuestion(){
    let questionForm = `<label for="question">New Question:</label>
    <textarea name="question" id="question" class="form-input new-question"></textarea>`
    let div = document.createElement('div')
    div.innerHTML = questionForm;
    document.querySelector('.new-survey-form').appendChild(div)
}

function addOption(){
    let option = `<label for="option">Option: </label>
    <input type="text" name="option" id="option" class="form-input new-option" />`
    let div = document.createElement('div');
    div.innerHTML = option; 
    document.querySelector('.new-survey-form').appendChild(div);
}

document.querySelector('#save-surv-btn').addEventListener('submit', newFormHandler);
document.querySelector('.addQuestion').addEventListener('click', addQuestion);
document.querySelector('#addOpt-btn').addEventListener('click', addOption);

async function newFormHandler(event) {
    event.preventDefault();

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

document.querySelector('.new-survey-form').addEventListener('submit', newFormHandler);

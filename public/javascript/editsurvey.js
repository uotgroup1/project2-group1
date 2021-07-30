async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="survey-title"]').value.trim();
    const question = document.querySelector('input[name="question"]').value.trim();
    const option = document.querySelector('input[name="option"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/survey/${id}`, {
        method: 'PUT',
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
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.questOpts').addEventListener('submit', editFormHandler);

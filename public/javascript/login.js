//login handler fxn
async function loginSurveyHandler(event) {
  event.preventDefault(event); //this is to stop it from loading
  const email = document.querySelector('#email-login').value.trim(); //identify email selectory in html
  const password = document.querySelector('#password-login').value.trim(); //identify pwd selector in html
  //setting validation to make sure that email and password are both required

  console.log(email, password);
  if (email && password) {
    const response = await fetch('/api/users/login', {
      //need to make sure this path corresponds to pass in backend
      method: 'post', //this is a post request
      body: JSON.stringify({
        //we need to stringify the email and password to pass to backend
        email,
        password,
      }),
      Headers: { 'Content-Type': 'application/json' }, //this holds the metadata of the request It specifies the data type to be sent in the request
    });

    console.log('******', response);

    if (response.ok) {
      //if the response is ok go to this url otherwise send a alert to browser
      document.location.replace('dashboard'); // need to confirm this with html routes
    } else {
      alert(response.statusText);
    }
  }
}

//signup handler fxn
async function signUpHandler(event) {
  event.preventDefault(event); //this is to stop it from loading
  const user_name = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log(user_name);
  if (user_name && email && password) {
    console.log('passed');
    const response = await fetch('/api/users/', {
      method: 'post',
      body: JSON.stringify({
        user_name,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('dashboard');
    }
    console.log('skipped');
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginSurveyHandler);
document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpHandler);

async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const pass1 = document.querySelector('#password1-register').value.trim();
    const github = document.querySelector('#github-register').value.trim();
  if (pass1!=password){
    alert("Password Mismatch!");
    return;
  }
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          
          github,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        alert('Account created successfully');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.register-form').addEventListener('submit', signupFormHandler);

function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  if (username === 'username' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

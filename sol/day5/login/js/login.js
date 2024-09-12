var FORM = document.getElementById('login-form');

FORM.onsubmit = (event) => {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var user = JSON.parse(localStorage.getItem('usr_identity'));

  if (user === null) {
    alert('User not found!');
    return;
  }

  if (user.name !== name || user.password !== password) {
    alert('Invalid credentials!');
    return;
  }

  alert('Login successful!');

  window.location.href = '/';
}

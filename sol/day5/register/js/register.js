var FORM = document.getElementById('register-form');

FORM.onsubmit = (event) => {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var confirm = document.getElementById('confirm_password').value;

  if (password !== confirm) {
    alert('Passwords do not match!');
    return;
  }

  var user = { name, password };

  localStorage.setItem('usr_identity', JSON.stringify(user));

  alert('User registered successfully!');

  window.location.href = '/login';
}

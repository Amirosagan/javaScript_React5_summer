var USR_IDENTITY = localStorage.getItem('usr_identity');
var MES = document.getElementById('message');

if (USR_IDENTITY !== null) {
  user = JSON.parse(USR_IDENTITY);
  MES.innerHTML = `Welcome back, ${user.name}`;
}

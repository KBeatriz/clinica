function checkFields() {
  const dom = document.querySelector('.emptyfield');
  const name = document.querySelector('#nome_cad').value;
  const email = document.querySelector('#email_cad').value;
  const pass = document.querySelector('#senha_cad').value;
  const check = checkEmail(email);
  if (name === '' || email === '' || pass === '') {
    dom.classList.add('ativado');
  } else if (check !== true) {
    alert('E-mail Inválido');
  } else {
    alert('Cadastrado com sucesso');
    window.open('../login-page/login.html', '_self');
  }
}

function checkEmail(value) {
  const re = /\S+@\S+\.\S+/;
  const check = re.test(value);
  return check;
}

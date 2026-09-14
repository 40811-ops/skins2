const cadastro = document.getElementById('cadastro');
const login = document.getElementById('login');

// começa mostrando o login
cadastro.hidden = true;

document.querySelectorAll('.alternar').forEach(link => {
  link.addEventListener('click', (evento) => {
    evento.preventDefault();
    cadastro.hidden = !cadastro.hidden;
    login.hidden = !login.hidden;
  });
});

const botaoLogin = document.querySelector('#login .botao');

botaoLogin.addEventListener('click', () => {
  window.location.href = 'home.html';
});
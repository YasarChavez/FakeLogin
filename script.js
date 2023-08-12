const $usuario = document.querySelector("#user");
const $password = document.querySelector("#password");
const $entrar = document.querySelector("#entrar");
const $login = document.querySelector(".login");
const $conectado = document.querySelector(".conectado");
const $nombreUsuario = document.querySelector("#nombreUsuario");

function login() {
  if (!$usuario.value) {
    alert("Por favor ingrese un usuario");
    return;
  }
  if (!$password.value) {
    alert("Por favor ingrese una contraseña");
    return;
  }
  if ($usuario.value && $password.value) {
    $login.classList.add("hidden");
    $nombreUsuario.innerHTML = $usuario.value;
    $conectado.classList.remove("hidden");
    localStorage.setItem("estado", true);
    localStorage.setItem("usuariologueado", $usuario.value);
  }
}

function logout() {
  $login.classList.remove("hidden");
  $conectado.classList.add("hidden");
  localStorage.setItem("estado", false);
  localStorage.setItem("usuariologueado", "");
}

function comprobarEstado() {
  if (localStorage.getItem("estado") === "true") {
    $login.classList.add("hidden");
    $conectado.classList.remove("hidden");
    $nombreUsuario.innerHTML = localStorage.getItem("usuariologueado");
  }
}

comprobarEstado();

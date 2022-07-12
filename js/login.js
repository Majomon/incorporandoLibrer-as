let btnInicioSesion = document.querySelector("#btnInicioSesion"),
    btnRegistro = document.querySelector("#btnRegistro");

const emailUser = document.querySelector("#emailUser"),
    passwordUser = document.querySelector("#passwordUser");

btnInicioSesion.innerText = "Iniciar sesion"
btnRegistro.innerText = "No estas registrado? Registrate, es gratis"


function inicioSesion(user) {
    let buscandoUser = user.find((user) => {
        return user.uEmail == emailUser.value && user.uPassword == passwordUser.value;
    });
    buscandoUser
        ? (window.location.href = "https://majomon.github.io/pardosera/")
        : Swal.fire({
            icon: 'error',
            title: 'X_X',
            text: 'Usuario no registrado!'
        })
    return buscandoUser;
}

function recuperarLS() {
    let datos = JSON.parse(localStorage.getItem("usuario"));
    return datos;
}


const usuariosLS = recuperarLS();

btnInicioSesion.addEventListener("click", (e) => {
    e.preventDefault();
    inicioSesion(usuariosLS)
});


btnRegistro.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./index.html";
});


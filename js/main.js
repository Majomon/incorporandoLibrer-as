let btnRegistrarse = document.querySelector("#btnRegistrarse"),
    btnLogin = document.querySelector("#btnLogin"),
    check = document.querySelector("#check");

const nombre = document.querySelector("#nombre"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    p = document.querySelector("p");



    btnRegistrarse.innerText = "Registrarse"
    btnLogin.innerText = "Ya estas registrado?"


/* Declarando Arrays de objetos */
let clientesSessionStorage = []
let clientesLocalStorage = []


/* Funciones */
function guardar(valor) {
    let user = { uNombre: nombre.value, uEmail: email.value, uPassword: password.value };

    if (user.uNombre == "" || user.uEmail == "" || user.uPassword == "") {
        Swal.fire({
            icon: 'error',
            title: ':C',
            text: 'Complete todos los campos por favor!',
        })
        return;
    } else {
        let { uNombre: nombre, uEmail: email } = user
        if (valor === "sessionStorage") {
            /* Creando Array de objetos */
            clientesSessionStorage.push(user)
            sessionStorage.setItem("usuario", JSON.stringify(clientesSessionStorage))

            Toastify({

                text: "Gracias por registrarse",

                duration: 5000

            }).showToast();
        }
        if (valor === "localStorage") {
            /* Creando Array de objetos */
            clientesLocalStorage.push(user)
            localStorage.setItem("usuario", JSON.stringify(clientesLocalStorage))
            Toastify({

                text: "Gracias por registrarse",

                duration: 5000

            }).showToast();

        }
    }
}


function recuperoDatos(datos) {
    if (datos) {
        nombre.value = datos.uNombre;
        email.value = datos.uEmail;
        password.value = datos.uPassword;
    }
}

recuperoDatos(JSON.parse(localStorage.getItem("persona")));


btnRegistrarse.addEventListener("click", (event) => {
    console.log(event.target);
    event.preventDefault()
    check.checked ? guardar("localStorage") : guardar("sessionStorage")
});



btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./login.html";
});


/* Creando Array de objetos */

if (valor === "localStorage") {

    clientesLocalStorage.push(user)
    localStorage.setItem("usuario", JSON.stringify(clientesLocalStorage))

    let html;
    html = `
            <div class="col s4 m3">
                <div>
                    <div class="d-flex flex-column align-items-center justify-content-between p-5 m-5">
                        <h2>Bienvenido ${nombre}</h2>
                        <h4>Gracias por registrarte </h4>
                        <p class="p-2 m-2">El email de registro es: ${email}</p>
                    </div>
                </div>
            </div>`;

    contenedor.innerHTML += html;
}


/*     if (check.checked) {
        guardar("localStorage")
    } else {
        guardar("sessionStorage")
    } */
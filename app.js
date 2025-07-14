const formulario = document.querySelector(".form-create");
let contador = 0;
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const publicacion = document.querySelector("#publicacion").value;
    const contenedor = document.querySelector(".contenedor-publicaciones");

    contenedor.innerHTML += `        <div class="publicacion">
            <p>${contador += 1}</p>
            <p>${publicacion}</p>
            <button>editar</button>
            <button>eliminar</button>
        </div>
    </div>`;
});
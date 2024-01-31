// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        //Llamamos a la función para renderizar los datos del usuario
        renderizarDatosUsuario(data.results[0]);
    })
    .catch(error => {
        console.log(`Error al obtener los datos del usuario`, error);
    })

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    
    // Accedemos al elemento del DOM donde queremos insertar la información
    const tarjetaUsuario = document.querySelector(".tarjeta");

    //creamos elementos para la foto, nombre completo y correo
    const fotoUsuario = document.createElement('img');
    const nombreCompleto = document.createElement('h2');
    const emailUsuario = document.createElement('p');


    //asignamos valores obtenidos de la api a los elementos
    fotoUsuario.src = datos.picture.large;
    nombreCompleto.textContent = `${datos.name.first} ${datos.name.last}`;
    emailUsuario.textContent = datos.email;

    //limpiamos todo
      // Limpiamos el contenido anterior antes de agregar nuevos elementos
      tarjetaUsuario.innerHTML = '';

    //agregamos los elementos al contenedor en el DOM
    tarjetaUsuario.appendChild(fotoUsuario);
    tarjetaUsuario.appendChild(nombreCompleto);
    tarjetaUsuario.appendChild(emailUsuario); 
    
    
    
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
// Función para realizar la llamada a la API y renderizar los datos del usuario
// Función para realizar la llamada a la API y renderizar los datos del usuario
function obtenerYRenderizarDatosUsuario() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            // Llamamos a la función para renderizar los datos del usuario
            renderizarDatosUsuario(data.results[0]);
        })
        .catch(error => {
            console.error('Error al obtener los datos del usuario:', error);
        });
}

// Llamamos a la función al cargar la página para mostrar un usuario por defecto
obtenerYRenderizarDatosUsuario();

// Manejador de eventos para el botón "Pedir random"
const botonRandom = document.getElementById('random');
botonRandom.addEventListener('click', obtenerYRenderizarDatosUsuario)
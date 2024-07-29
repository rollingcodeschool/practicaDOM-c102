let mostrarParrafo = true;

const cambiarTitulo = () => {
  console.log("desde la funcion cambiarTitulo");
  //obtener el h1 del proyecto
  // const tituloPrincipal = document.getElementsByTagName('p');
  // const tituloPrincipal = document.getElementById('titulo');
  // const tituloPrincipal = document.getElementsByClassName('btn');
  // const tituloPrincipal = document.querySelector('.btn');
  // const tituloPrincipal = document.querySelectorAll('p');
  const tituloPrincipal = document.getElementById("titulo");
  console.log(tituloPrincipal);
  // tituloPrincipal.innerText = 'Cambiamos el titulo JS'
  tituloPrincipal.innerHTML = "Cambiamos el titulo <strong>JS</strong>";
  tituloPrincipal.className = "text-info display-4";
  //cambiar ese h1, texto y style
};

const crearParrafo = () => {
  //insertar el parrafo nuevo en el segundo section
  const secciones = document.querySelectorAll("section");
  if (mostrarParrafo) {
    console.log("desde crearParrafo");
    //crear un nuevo parrafo
    const parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerHTML =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eveniet dignissimos porro. Inventore minus nulla nesciunt accusantium eaque! Animi, quas beatae. Quo placeat perspiciatis ut cupiditate eligendi. Odio quisquam excepturi voluptatibus eaque dolor nobis quae ut commodi, nesciunt, dolorum laboriosam alias veritatis facilis magni nam, placeat itaque! Sapiente, laborum error?";
    parrafoNuevo.className = "lead";
    console.log(parrafoNuevo);
    //insertar el nuevo elemento
    // secciones[1].appendChild(parrafoNuevo); //agrega el nodo al final
    // secciones[1].prepend(parrafoNuevo);
    secciones[1].insertBefore(parrafoNuevo, btnVerMas);
    //cambiar el texto del botón
    btnVerMas.innerHTML = "Ver menos";
    // btnVerMas.className = 'btn btn-outline-danger'
    btnVerMas.classList.remove("btn-outline-info");
    btnVerMas.classList.add("btn-outline-danger");
    //cambio mi variable bandera
    mostrarParrafo = false;
  } else {
    console.log("aqui borra el parrafo");
    console.log(secciones[1].children);
    //eliminar un nodo
    secciones[1].removeChild(secciones[1].children[2]);
    //resetear el boton ver mas
    mostrarParrafo = true;
    btnVerMas.classList.remove("btn-outline-danger");
    btnVerMas.classList.add("btn-outline-info");
    btnVerMas.innerHTML = "Ver mas...";
  }
};

const buscarPalabra = (e) => {
  e.preventDefault();
  console.log(e);
  console.log("desde la funcion buscarPalabra");
  //buscar el valor del input
  const input = document.querySelector('.form-control').value
  console.log(input)
};

//agregar un evento a un elemento del html
const btnVerMas = document.querySelector(".btn-outline-info");
console.log(btnVerMas);
//traer el formulario
const formularioBusqueda = document.querySelector(".d-flex");

//manejadores de eventos
// cuando tengo que invocar a una funcion con parametros guardarla dentro de una funcion anonima
// btnVerMas.addEventListener('click', ()=>  crearParrafo(pasdas) )
btnVerMas.addEventListener("click", crearParrafo);

formularioBusqueda.addEventListener("submit", buscarPalabra);

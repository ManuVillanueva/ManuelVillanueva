// Funcion que me aplica el estilo a la opcion seleccionada en el menu y saca la previamente seleccionada

function seccionar(link) {
    let opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    // hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive

    let x = document.getElementById("nav");
    x.className = "";
}

// Función que muestra el menu responsive

function responsiveMenu() {
    let x = document.getElementById("nav");

    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Función para cambiar entre las pestañas del proyecto
function abrirPestana(evt, nombrePestana) {
    var i, tabcontent, tablinks;
    
    // 1. Ocultar todos los contenidos de las pestañas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) { 
        tabcontent[i].style.display = "none"; 
        // Quitar la clase active-tab por si acaso
        tabcontent[i].classList.remove("active-tab"); 
    }
    
    // 2. Quitar el color "activo" de todos los botones
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) { 
        tablinks[i].className = tablinks[i].className.replace(" active", ""); 
    }
    
    // 3. Mostrar la pestaña seleccionada y marcar su botón como activo
    document.getElementById(nombrePestana).style.display = "block";
    evt.currentTarget.className += " active";
}

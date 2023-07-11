
function removeRecipeFromDB(){
    event.preventDefault();
    const URL_db = "http://erwinzam.pythonanywhere.com/";

    var id_receta = document.getElementById("id_receta").value;
    console.log(id_receta);

    fetch(URL_db + `recetas/${id_receta}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                console.log('Receta eliminada correctamente.');
                alert('Receta eliminada correctamente.');
            } else {
                // Si hubo un error, lanzar explícitamente una excepción
                // para ser "catcheada" más adelante
                throw new Error('Error al eliminar la receta.');
            }
        })
        .catch(error => {
            // Código para manejar errores
            alert('Error al eliminar la receta.');
        });

    return false;
}
function subido(){
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var ingredientes = document.getElementById("ingredientes").value;
    var instrucciones = document.getElementById("instrucciones").value;
    var tipo = document.getElementById("tipo").value;
    var email = document.getElementById("email").value;

    var confirmar = confirm("desea subir la receta?");
     if(confirmar == true){
        prompt("confirme email");
        return true;
     }else{
        return false;
     }
}
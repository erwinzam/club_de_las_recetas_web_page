
function subido(){
   event.preventDefault();

   const URL_db = "https://erwinzam.pythonanywhere.com/";

   var nombre = document.getElementById("nombre").value;
   var descripcion = document.getElementById("descripcion").value;



   var ingredientes_form_sel = document.querySelector(".ingredientes_form");
   var ingredientes_sel = ingredientes_form_sel.querySelectorAll(".ingrediente_form");

   var ingredientes = [];

   ingredientes_sel.forEach(child => {
   // Do something with each child element
   ingredientes.push(child.querySelector("input").value);
   });




   var pasos_form_sel = document.querySelector(".pasos_form");
   var pasos_sel = pasos_form_sel.querySelectorAll(".paso_form");

   var instrucciones = [];

   pasos_sel.forEach(child => {
   // Do something with each child element
   instrucciones.push(child.querySelector("textarea").value);
   });

   var estacc_form_sel = document.querySelector(".estacc_form");
   var inputs_estacc_sel = estacc_form_sel.querySelectorAll('input[type="radio"]');

   let selectedValue;
   inputs_estacc_sel.forEach(radioButton => {
   // Step 3: Check if the radio button is checked
   if (radioButton.checked) {
      // Step 4: Get the value of the checked radio button
      selectedValue = radioButton.value;
   }
   });

   var estacc = 1;

   if(selectedValue == "es-tacc"){
      estacc = 1;
   }
   else if(selectedValue == "no-es-tacc"){
      estacc = 0;
   }


   var URL_imagen = document.getElementById("URL_imagen").value;

   var tipo = document.getElementById("tipo").value;

   var autor = document.getElementById("autor").value;

   if(autor == ""){
      autor = "Anonimo"
   }

   var email = document.getElementById("email").value;



   // var confirmar = confirm("desea subir la receta?");
   // if(confirmar == true){
   //    prompt("confirme email");
   //    return true;
   // }else{
   //    return false;
   // }
   id = nombre + autor;

   var receta = {
      id : id,
      nombre : nombre,
      URL_imagen : URL_imagen,
      descripcion : descripcion,
      autor : autor,
      categoria : tipo,
      tacc : estacc,
      ingredientes : ingredientes.join('//'),
      instrucciones : instrucciones.join('//'),
   }

   console.log(receta);

   fetch(URL_db + 'recetas', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(receta)
   })
   .then(function (response) {
         // Código para manejar la respuesta
         if (response.ok) {
            return response.json(); // Parseamos la respuesta JSON
         } else {
            // Si hubo un error, lanzar explícitamente una excepción
            // para ser "catcheada" más adelante
            throw new Error('Error al agregar la receta.');
         }
   })
   .then(function (data) {
         alert('Receta agregada correctamente.');
         //Limpiamos el formulario.
         // document.getElementById('nombre').value = "";
         // document.getElementById('descripcion').value = "";
         // document.getElementById('URL_imagen').value = "";
         // document.getElementById('autor').value = "";
         // document.getElementById('email').value = "";
   })
   .catch(function (error) {
         // Código para manejar errores
         alert('Error al agregar la receta.');
   });

   
   return true;
   
}
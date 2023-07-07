let titulo_receta = document.querySelector('.nombre_receta');
let categoria = document.querySelector('.categoria');
let autor = document.querySelector('.author');
let tacc= document.querySelector('.celiaco');
let imagen_receta = document.querySelector('.recipe-image');
let ingredientes_sel = document.querySelector('.ingredients');
let instrucciones_sel = document.querySelector('.preparation');

fetch('https://erwinzam.pythonanywhere.com/recetas')
    .then(response => {return response.json()})
    .then(data => {
        console.log(data[0].URL_imagen);
        titulo_receta.innerHTML =`${data[0].nombre}`;
        categoria.innerHTML = `${data[0].categoria}`;
        autor.innerHTML = `${data[0].autor}`;
        imagen_receta.setAttribute("src", data[0].URL_imagen);
        tacc.innerHTML=`${(data[0].tacc == 0)?'No':'Si'}`;

        // Procesamiento de la parte de los ingredientes
        let ingredientes = (data[0].ingredientes).split('//');
        ingredientes_sel.innerHTML = ``;
        ingredientes.forEach((ingrediente) => {
            ingredientes_sel.innerHTML +=
            `
            <li>${ingrediente}</li>
            `
        });

        // Procesamiento de la parte de las instrucciones
        let instrucciones = (data[0].instrucciones).split('//');
        instrucciones_sel.innerHTML = ``;
        instrucciones.forEach((instruccion) => {
            instrucciones_sel.innerHTML +=
            `
            <li>${instruccion}</li>
            `
        });
        
    })


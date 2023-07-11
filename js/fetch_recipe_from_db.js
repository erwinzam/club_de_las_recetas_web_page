let titulo_pagina_receta_sel = document.querySelector('.titulo-pagina-receta');

let titulo_receta = document.querySelector('.nombre_receta');
let categoria = document.querySelector('.categoria');
let autor = document.querySelector('.author');
let tacc= document.querySelector('.celiaco');
let imagen_receta = document.querySelector('.recipe-image');
let ingredientes_sel = document.querySelector('.ingredients');
let instrucciones_sel = document.querySelector('.preparation');
let descripcion_sel = document.querySelector('.descripcion');
let id_receta_sel = document.querySelector('.id_receta');

var fileName = window.location.pathname.split('/').pop();
var str = fileName;
var match = str.match(/\d/);
var firstNumber = match ? match[0] : null;

fetch('https://erwinzam.pythonanywhere.com/recetas')
    .then(response => {return response.json()})
    .then(data => {
        dato_i = data[data.length - firstNumber]
        console.log(dato_i.URL_imagen);

        titulo_pagina_receta_sel.innerHTML = `El club de las recetas - ${dato_i.nombre}`
        
        titulo_receta.innerHTML =`${dato_i.nombre}`;
        id_receta_sel.innerHTML = `${dato_i.id}`;
        descripcion_sel.innerHTML = `${dato_i.descripcion}`
        categoria.innerHTML = `${dato_i.categoria}`;
        autor.innerHTML = `${dato_i.autor}`;
        imagen_receta.setAttribute("src", dato_i.URL_imagen);
        tacc.innerHTML=`${(dato_i.tacc == 1)?'No':'Si'}`;

        // Procesamiento de la parte de los ingredientes
        let ingredientes = (dato_i.ingredientes).split('//');
        ingredientes_sel.innerHTML = ``;
        ingredientes.forEach((ingrediente) => {
            ingredientes_sel.innerHTML +=
            `
            <li>${ingrediente}</li>
            `
        });

        // Procesamiento de la parte de las instrucciones
        let instrucciones = (dato_i.instrucciones).split('//');
        instrucciones_sel.innerHTML = ``;
        instrucciones.forEach((instruccion) => {
            instrucciones_sel.innerHTML +=
            `
            <li>${instruccion}</li>
            `
        });
        
    })


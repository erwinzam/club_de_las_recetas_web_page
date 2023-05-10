// Primero obtengo todos los elementos con la clase '.receta'
const recetas = document.querySelectorAll('.receta');

// Ahora convierto la selección en un Array para poder ordenarlo.
const recetasArray = Array.from(recetas);

// Ordeno el array de recetas por orden alfabético de sus IDs.
recetasArray.sort((a, b) => {
  const idA = a.id.toUpperCase();
  const idB = b.id.toUpperCase();

  if (idA < idB) {
    return -1;
  }
  if (idA > idB) {
    return 1;
  }

  return 0;
});

// Iterar sobre el array de recetas ordenado y añadirlos a cada elemento receta del contenedor, en orden.
const contenedorRecetas = document.querySelector('.grid');
recetasArray.forEach(receta => contenedorRecetas.appendChild(receta));

// Primero obtengo el lugar donde esta ubicado la receta del día
let recipe_of_day_render_position = document.querySelector('.recipe_of_day_section');


// Se utiliza una API rest de la URL de abajo que contiene
// una base de datos de recetas de cocina.
// La URL de abajo proporciona una receta de cocina random
// cuya imagen, su nombre y video de youtube asociado se
// obtienen para ponerlo en la sección receta del día
// para dar el efecto que cada vez que se carga la pagian
// se tiene una receta diferente a la anterior carga.
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {return response.json()})
    .then(data => {
        console.log(data.meals[0])
        recipe_of_day_render_position.innerHTML +=
            `
            <a class="recipe_of_day_box" href="${data.meals[0].strYoutube}" target="_blank">
                <div class="recipe_of_day_img">
                    <img src="${data.meals[0].strMealThumb}" alt="">
                </div>
                <div class="recipe_of_day_title">
                    <h3>${data.meals[0].strMeal}</h3>
                </div>
                <div class="recipe_of_day_desc">
                    <p>Ver video de preparación.<p>
                </div>
            </a>
            `;

    })
        
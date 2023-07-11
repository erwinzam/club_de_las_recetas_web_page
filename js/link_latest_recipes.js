
const URL_db = "https://erwinzam.pythonanywhere.com/recetas";
const latest_recipes_show_number = 4;

var latest_recipes_sel = document.querySelector(".latest_recipes");
var recipe_boxes_sel = latest_recipes_sel.querySelectorAll(".recipe_box");

fetch(URL_db)
    .then(response => {return response.json()})
    .then(data => {
        console.log(data[data.length - 1]);

        if(data.length < latest_recipes_show_number){
            for(let i = data.length - 1, j = 0; i > -1; i--,j++){
                console.log(data[i]);
                recipe_boxes_sel[j].href = "receta" + (j+1) + ".html";
                recipe_boxes_sel[j].querySelector(".recipe_box_img").querySelector('img').src = data[i].URL_imagen;
                recipe_boxes_sel[j].querySelector(".recipe_title").querySelector('h3').innerHTML = data[i].nombre;
            }
        }
        else if(data.length >= latest_recipes_show_number){
            for(let i = data.length - 1, j = 0; i > (data.length - latest_recipes_show_number -1); i--,j++){
                console.log(data[i]);
                recipe_boxes_sel[j].href = "receta" + (j+1) + ".html";
                recipe_boxes_sel[j].querySelector(".recipe_box_img").querySelector('img').src = data[i].URL_imagen;
                recipe_boxes_sel[j].querySelector(".recipe_title").querySelector('h3').innerHTML = data[i].nombre;
            }
        }
    })


function previewURLImage(){
    const URLImagenSel = document.querySelector('.URL_imagen_form');
    var inputURLImageValue = document.getElementById('URL_imagen').value;

    if(URLImagenSel.childElementCount == 1){
        const newIngredientPreviewImg = document.createElement('img');
        newIngredientPreviewImg.src = inputURLImageValue;
        newIngredientPreviewImg.className = 'recipe-image-preview';
        newIngredientPreviewImg.alt = 'Imagen de previsualización de la receta';

        URLImagenSel.appendChild(newIngredientPreviewImg)
    }
    else{
        var ingredientImgPreviewSel = document.querySelector('.recipe-image-preview');
        ingredientImgPreviewSel.src = inputURLImageValue
    }
    
}
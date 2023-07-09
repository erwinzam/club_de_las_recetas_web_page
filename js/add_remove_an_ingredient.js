let ingredientCounter = 1;

function addIngredient() {
  const ingredientsContainer = document.querySelector('.ingredientes_form');

  ingredientCounter++;

  const newIngredientDiv = document.createElement('div');
  newIngredientDiv.className = 'ingrediente_form';

  const newIngredientLabel = document.createElement('label');
  newIngredientLabel.textContent = 'Ingrediente ' + ingredientCounter + ':';
  newIngredientLabel.setAttribute('for', 'ingrediente' + ingredientCounter);

  const newIngredientInput = document.createElement('input');
  newIngredientInput.type = 'text';
  newIngredientInput.id = 'ingrediente' + ingredientCounter;
  newIngredientInput.name = 'ingrediente' + ingredientCounter;
  newIngredientInput.required = true;

  const newRemoveButton = document.createElement('button');
  newRemoveButton.type = 'button';
  newRemoveButton.textContent = 'Eliminar ingrediente';
  newRemoveButton.onclick = function() {
    removeIngredient(this);
  };

  newIngredientDiv.appendChild(newIngredientLabel);
  newIngredientDiv.appendChild(newIngredientInput);
  newIngredientDiv.appendChild(newRemoveButton);

  ingredientsContainer.appendChild(newIngredientDiv);
}

function removeIngredient(button) {
  const ingredientDiv = button.parentNode;
  const ingredientsContainer = ingredientDiv.parentNode;
  ingredientsContainer.removeChild(ingredientDiv);
}
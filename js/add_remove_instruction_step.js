let stepCounter = 1;

function addStep() {
  const stepsContainer = document.querySelector('.pasos_form');

  stepCounter++;

  const newStepDiv = document.createElement('div');
  newStepDiv.className = 'paso_form';

  const newStepLabel = document.createElement('label');
  newStepLabel.textContent = 'Paso ' + stepCounter + ':';
  newStepLabel.setAttribute('for', 'step' + stepCounter);

  const newStepInput = document.createElement('textarea');
  newStepInput.id = 'step' + stepCounter;
  newStepInput.name = 'step' + stepCounter;
  newStepInput.rows = 2;
  newStepInput.required = true;

  const newRemoveButton = document.createElement('button');
  newRemoveButton.type = 'button';
  newRemoveButton.textContent = 'Eliminar paso';
  newRemoveButton.onclick = function() {
    removeStep(this);
  };

  newStepDiv.appendChild(newStepLabel);
  newStepDiv.appendChild(newStepInput);
  newStepDiv.appendChild(newRemoveButton);

  stepsContainer.appendChild(newStepDiv);
}

function removeStep(button) {
  const stepDiv = button.parentNode;
  const stepsContainer = stepDiv.parentNode;
  stepsContainer.removeChild(stepDiv);
}

var selectElement = document.getElementById('tipo');
var optionElements = Array.from(selectElement.options);

optionElements.sort(function(a, b) {
    return a.value.localeCompare(b.value);
});

optionElements.forEach(function(option) {
    selectElement.appendChild(option);
});
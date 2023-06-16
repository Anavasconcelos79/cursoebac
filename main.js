function validarFormulario() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    if (campoB > campoA) {
        alert("Formulário válido! Número B é maior que o número A.");
    } else {
        alert("Formulário inválido! Número B precisa ser maior que o número A.");
    }
    
    return false; 
    }
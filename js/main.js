let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Adicionar evento de teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Verificar se a tecla pressionada é um número
    if (!isNaN(key) || key === '.') {
        appendToDisplay(key);
    }

    // Verificar se a tecla pressionada é o Enter (=) ou o Backspace (←)
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});
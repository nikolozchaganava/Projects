const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'ERROR!';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

// The different designs for the calculator (underwater color palette is default)
const bluePalette = document.getElementById('blue-palette');
const orangePalette = document.getElementById('orange-palette');
const greenPalette = document.getElementById('green-palette');

const originalButtons = document.querySelectorAll('.original');
const performanceButtons = document.querySelectorAll('.operations');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const deleteButton = document.getElementById('delete');
const body = document.body;
const calculator = document.getElementById('calculator');

bluePalette.addEventListener('click', setBluePalette);
orangePalette.addEventListener('click', setOrangePalette);
greenPalette.addEventListener('click', setGreenPalette);

function setColorForElements(elements, color) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
}

function setBoxShadowForElements(elements, boxShadow) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.boxShadow = boxShadow;
    }
}

function addActiveEffect(element, boxShadow) {
    element.addEventListener('mousedown', function() {
        element.style.boxShadow = 'none';
        element.style.position = 'relative';
        element.style.top = '10px';
    });
    element.addEventListener('mouseup', function() {
        element.style.boxShadow = boxShadow;
        element.style.top = '0px';
    });
}

function setBluePalette() {
    body.style.backgroundColor = '#ADD8E6';
    setColorForElements(originalButtons, '#00ddff');
    setBoxShadowForElements(originalButtons, '0px 10px 0px #00bedc');
    setColorForElements(performanceButtons, '#00BFFF');
    setBoxShadowForElements(performanceButtons, '0px 10px 0px #008cbb');
    clearButton.style.backgroundColor = '#40E0D0';
    clearButton.style.boxShadow = '0px 10px 0px #3CB4B4';
    deleteButton.style.backgroundColor = '#1E90FF';
    deleteButton.style.boxShadow = '0px 10px 0px #1668b8';
    equalButton.style.backgroundColor = '#4169E1';
    equalButton.style.boxShadow = '0px 10px 0px #3352b0';
    display.style.backgroundColor = '#B0E0E6';
    display.style.boxShadow = '0px 10px 0px #82a6ab';
    display.style.color = '#000080';
    calculator.style.backgroundColor = '#013A63';
    calculator.style.boxShadow = '0px 25px 0px #01243d';
    setActiveEffectForAllButtons();
}

function setOrangePalette() {
    body.style.backgroundColor = '#FFEFD5';
    setColorForElements(originalButtons, '#DAA520');
    setBoxShadowForElements(originalButtons, '0px 10px 0px #b8860b');
    setColorForElements(performanceButtons, '#FFA500');
    setBoxShadowForElements(performanceButtons, '0px 10px 0px #ff8c00');
    clearButton.style.backgroundColor = '#FF8C00';
    clearButton.style.boxShadow = '0px 10px 0px #ff7f50';
    deleteButton.style.backgroundColor = '#FF6347';
    deleteButton.style.boxShadow = '0px 10px 0px #ff4500';
    equalButton.style.backgroundColor = '#FF7F50';
    equalButton.style.boxShadow = '0px 10px 0px #ff6347';
    display.style.backgroundColor = '#FFFFE0';
    display.style.boxShadow = '0px 10px 0px #f0e68c';
    display.style.color = '#B8860B';
    calculator.style.backgroundColor = '#ffd700';
    calculator.style.boxShadow = '0px 25px 0px #ba9d00';
    setActiveEffectForAllButtons();
}

function setGreenPalette() {
    body.style.backgroundColor = '#F0FFF0';
    setColorForElements(performanceButtons, '#32CD32');
    setBoxShadowForElements(performanceButtons, '0px 10px 0px #228B22');
    setColorForElements(originalButtons, '#228B22');
    setBoxShadowForElements(originalButtons, '0px 10px 0px #006400');
    clearButton.style.backgroundColor = '#00FF7F';
    clearButton.style.boxShadow = '0px 10px 0px #00ba5d';
    deleteButton.style.backgroundColor = '#2E8B57';
    deleteButton.style.boxShadow = '0px 10px 0px #28754a';
    equalButton.style.backgroundColor = '#3CB371';
    equalButton.style.boxShadow = '0px 10px 0px #31915c';
    display.style.backgroundColor = '#F5FFFA';
    display.style.boxShadow = '0px 10px 0px #82a6ab';
    display.style.color = '#556B2F';
    calculator.style.backgroundColor = '#91ff91';
    calculator.style.boxShadow = '0px 25px 0px #60a860';
    setActiveEffectForAllButtons();
}

function setActiveEffectForAllButtons() {
    addActiveEffect(clearButton, clearButton.style.boxShadow);
    addActiveEffect(deleteButton, deleteButton.style.boxShadow);
    addActiveEffect(equalButton, equalButton.style.boxShadow);
    for (let i = 0; i < originalButtons.length; i++) {
        addActiveEffect(originalButtons[i], originalButtons[i].style.boxShadow);
    }
    for (let i = 0; i < performanceButtons.length; i++) {
        addActiveEffect(performanceButtons[i], performanceButtons[i].style.boxShadow);
    }
}

setActiveEffectForAllButtons();

const inputField = document.getElementById("inputField");

function handleClick(event) {
    const symbols = ['+','-','x','%','/','.'];
    if (event.innerHTML === "C") {
        inputField.value = "";
    }
    else if (event.innerHTML === '<img src="svg/backspace-solid.svg" alt="">') {
        let text = inputField.value;
        let newText = text.slice(0, -1);
        inputField.value = newText;
    }
    else if (event.innerHTML === '%') {
        if (!symbols.includes(inputField.value.slice(-1))){
            let newText = inputField.value + '%';
            inputField.value = newText;
        }
    }
    else if (event.innerHTML === '<img src="svg/plus-solid.svg" alt="">') {
        if (!symbols.includes(inputField.value.slice(-1))){
            let newText = inputField.value + '+';
            inputField.value = newText;
        }
    }
    else if (event.innerHTML === '<img src="svg/times-solid.svg" alt="">') {
        if (!symbols.includes(inputField.value.slice(-1))){
            let newText = inputField.value + 'x';
            inputField.value = newText;
        }
    }
    else if (event.innerHTML === '<img src="svg/divide-solid.svg" alt="">') {
        if (!symbols.includes(inputField.value.slice(-1))){
            let newText = inputField.value + '/';
            inputField.value = newText;
        }
    }
    else if (event.innerHTML === '<img src="svg/minus-solid.svg" alt="">') {
        if (!symbols.includes(inputField.value.slice(-1))){   
            let newText = inputField.value + '-';
            inputField.value = newText;
        }
    }
    else if (event.innerHTML === '.') {
        if (!symbols.includes(inputField.value.slice(-1))){   
            let newText = inputField.value + '.';
            inputField.value = newText;
        }
    }
    else if (event.innerHTML === '<img src="svg/equals-solid.svg" alt="">') {
        try{
            let result = eval(inputField.value);
            inputField.value = result;
        }
        catch{
            inputField.value = "Error"
        }
    }
    else {
        let newText = inputField.value + event.innerHTML;
        inputField.value = newText;
    }
    console.log(event.innerHTML)
}

function createButton(character) {
    const symbols = ['C','<img src="svg/backspace-solid.svg" alt="">','%','<img src="svg/divide-solid.svg" alt="">','<img src="svg/times-solid.svg" alt="">','<img src="svg/plus-solid.svg" alt="">','<img src="svg/minus-solid.svg" alt="">'];
    if (character === '<img src="svg/equals-solid.svg" alt="">') {
        let button = `<button class="button equal-button" style="grid-column-start: 3; grid-column-end: 5;" onclick="handleClick(this)">${character}</button>\n`
        return button;
    }
    else if (symbols.includes(character)){
        let button = `<button class="button symbol-button" onclick="handleClick(this)" >${character}</button>\n`;
        return button;
    }
    else {
        let button = `<button class="button" onclick="handleClick(this)" >${character}</button>\n`;
        return button;
    }
}

const buttonsContainer = document.getElementById('buttons-container');

const buttons = ['C', '<img src="svg/backspace-solid.svg" alt="">', '%', '<img src="svg/divide-solid.svg" alt="">', '1', '2', '3', '<img src="svg/times-solid.svg" alt="">', '4', '5', '6', '<img src="svg/minus-solid.svg" alt="">', '7', '8', '9', '<img src="svg/plus-solid.svg" alt="">', '.', '0', '<img src="svg/equals-solid.svg" alt="">'];

let buttonLayout = "";
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    buttonLayout += createButton(element);
}

buttonsContainer.innerHTML = buttonLayout;
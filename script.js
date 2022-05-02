let getSel = (sel) => document.querySelector(sel);

let formParameters = document.forms['parameters'];
let createElem = formParameters.createElem;
let width = formParameters.width;
let height = formParameters.height;
let coordinates = formParameters.coordinates;
let elem = getSel('.elem');
let colors = document.querySelectorAll('.color');

createElem.onclick = () => {
    elem.style.display = 'block';
}

width.onblur = () => {
    elem.style.width = `${width.value}px`;
}
height.onblur = () => {
    elem.style.height = `${height.value}px`;
}

for (let i = 0; i < colors.length; i++) {
    colors[i].onclick = function () {
        let allStyle = getComputedStyle(colors[i]);
        elem.style.backgroundColor = allStyle.backgroundColor;
        elem.style.border = allStyle.border;
    }
}

let countMove = 0;
let coordinatesX = [];
let coordinatesY = [];
let countCoordinates = 0;

elem.onmouseover = function () {
    if (countMove == countCoordinates) {
        countMove = 0;
        elem.style.left = `20px`;
        elem.style.top = `20px`;
    } else {
        elem.style.left = `${coordinatesX[countMove]}%`;
        elem.style.top = `${coordinatesY[countMove]}%`;
        countMove++;
    }
}

coordinates.onclick = function () {
    countCoordinates = prompt('Введіть кількість пар координат');
    for (let i = 0; i < countCoordinates; i++) {
        let coorX = prompt(`Введіть координати Х(${i}/${countCoordinates-1}) у %`);
        coordinatesX.push(coorX);
    }

    for (let i = 0; i < countCoordinates; i++) {
        let coorY = prompt(`Введіть координати Y(${i}/${countCoordinates-1}) у %`);
        coordinatesY.push(coorY);
    }
    getSel('.parameters').style.display = 'none';
}
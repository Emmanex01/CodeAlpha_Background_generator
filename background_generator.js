const body = document.getElementsByTagName('body');
const color1 = document.getElementsByClassName('color1');
const color2 = document.getElementsByClassName('color2');
const container = document.getElementsByClassName('color2');
const color_range = document.getElementsByClassName('color_range');



function changeColor() {
    body[0].style.backgroundImage = `linear-gradient(to right, ${color1[0].value}, ${color2[0].value})`;
    color_range[0].innerHTML = `linear-gradient(to right, ${color1[0].value}, ${color2[0].value})`;
}
console.log(color_range[0].innerHtml);

color1[0].addEventListener("input", changeColor);

color2[0].addEventListener("input", changeColor);


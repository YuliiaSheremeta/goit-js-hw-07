const btnChangeColor = document.querySelector('.change-color');
const bodyStyles = document.querySelector('body');
const spanColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnChangeColor.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    bodyStyles.style.backgroundColor = newColor; 
    spanColor.textContent = newColor;
})



const controls = document.querySelector('.input-button-container');
const input = controls.querySelector('.input-last-task');
const createButton = controls.querySelector('.button-create');
const destroyButton = controls.querySelector('.button-destroy');
const boxesContainer = document.querySelector('.boxes-container');

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
        }

createButton.addEventListener('click', () => {
 const amount = Number(input.value);
            if (amount < 1 || amount > 100) {
                alert('Введіть число від 1 до 100.');
                return;
            }
            createBoxes(amount);
            input.value = ''; 
        });

destroyButton.addEventListener('click', () => {
            destroyBoxes();
        });

function createBoxes(amount) {
            destroyBoxes();

const boxes = [];
     for (let i = 0; i < amount; i++) {
                const size = 30 + i * 10; 
                const box = document.createElement('div');
                box.style.width = `${size}px`;
                box.style.height = `${size}px`;
                box.style.backgroundColor = getRandomHexColor();
                boxes.push(box);
            }
            boxesContainer.append(...boxes); 
        }

function destroyBoxes() {
 boxesContainer.innerHTML = ''; 
        }

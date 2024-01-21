let gridSize = prompt('Enter n * n grid size','16');
const gridLoop = gridSize * gridSize; //For square grid of n*n

const container = document.querySelector('#container');
// To get n-square divs for grid
for(let i = 1; i <= gridLoop; i++){  
        const div = document.createElement('div');
        div.setAttribute('id', `${i}th element`);
        div.classList.add('gridElement');
        container.appendChild(div);
}

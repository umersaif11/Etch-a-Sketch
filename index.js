let gridSize = prompt('Enter n * n grid size','16');

const gridLoop = gridSize * gridSize; //For square grid of n*n
const gapPixels = gridSize - 1; // so that gap-pixels gets subtracted from total
const gridFlexPixels = (960 - gapPixels) / gridSize; //formula to get n*n grid
const container = document.querySelector('#container');

// To get n-square divs for grid
for(let i = 1; i <= gridLoop; i++){  
        const div = document.createElement('div');
        div.setAttribute('id', `${i}th element`);
        div.classList.add('gridElement');
        container.appendChild(div);
}

//to get nodelist of all divs
var gridFlexItems = document.querySelectorAll('.gridElement'); 

//go through each noselist(array-like) div and assign flex-basis
//and height using formula abve
gridFlexItems.forEach((item) => {
    item.style.flexBasis = gridFlexPixels + 'px';
    item.style.height = gridFlexPixels + 'px';
})



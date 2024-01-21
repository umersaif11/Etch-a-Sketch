
function grid(){
    let gridSize = prompt('Enter n * n grid size','16');
    const container = document.querySelector('#container');

    //For loop of square grid of n*n
    const gridLoop = gridSize * gridSize; 
    // so that gap-pixels gets subtracted from total
    const gapPixels = gridSize - 1; 
    //formula to get n*n grid pixels
    const gridFlexPixels = (960 - gapPixels) / gridSize;

    // To get n-square divs for grid
    for(let i = 1; i <= gridLoop; i++){  
           const div = document.createElement('div');
           div.setAttribute('id', `${i}th element`);
           div.classList.add('gridElement');
           container.appendChild(div);
    }
    
   //to get nodelist of all divs
   let gridFlexItems = document.querySelectorAll('.gridElement');

   //go through each noselist(array-like) div and assign flex-basis
   //and height using formula above. Also add eventlisteners
   //for hovering effect
   gridFlexItems.forEach((item) => {
       item.style.flexBasis = gridFlexPixels + 'px';
       item.style.height = gridFlexPixels + 'px';

       item.addEventListener("mouseover", () => {
           item.style.backgroundColor = '#ff000080';
        });
       item.addEventListener("mouseout", () => {
           item.style.backgroundColor = '#7b3f00';
        });
})

}  

//event listener for button to click and get grid
document.getElementById('buttonId').addEventListener('click',grid);





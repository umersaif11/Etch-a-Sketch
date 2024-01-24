//function to put in click-event-listener of button
function grid(){
    //container-content clears out so that existing
    //grid is removed
    document.getElementById("container").innerHTML = ''; 

    let gridSize = prompt('Enter n * n grid size','5');

    //to set the grid limit between 2 - 100
    let gridSizeValue = Number(gridSize);
    if(gridSizeValue < 2){
        alert('Invalid Number:Type value between 2-100');
        gridSize = 5;    
    } else if(gridSizeValue > 100){
        alert('Invalid Number:Type value between 2-100');
        gridSize = 5;
    } else{
        alert(`${gridSize} is Valid Number`);
        gridSize = gridSize;
    }

    //For loop of square grid of n*n
    const gridLoop = gridSize * gridSize; 
    //so that gap-pixels gets subtracted from total
    const gapPixels = gridSize - 1; 
    //formula to get pixels of single box
    //of n*n grid pixels
    const gridFlexPixels = (960 - gapPixels) / gridSize;
    
    const container = document.querySelector('#container');
    // To get n-square divs for grid
    for(let i = 1; i <= gridLoop; i++){  
           const div = document.createElement('div');
           div.setAttribute('id', `${i}th element`);
           div.classList.add('gridElement');
           container.appendChild(div);
    }

   //to get nodelist of all divs
   let gridFlexItems = document.querySelectorAll('.gridElement');

   //go through each noselist(array-like) div and assign 
   //flex-basis(width) and height using formula above. 
   //Also add eventlisteners for hovering effect
   gridFlexItems.forEach((item) => {
       item.style.width = gridFlexPixels + 'px';
       item.style.height = gridFlexPixels + 'px';

       //when mouse cursor goes into box
       item.addEventListener("mouseover", () => {
           item.style.backgroundColor = '#ff000080';
        });
})
}  

//event listener for button to click and get grid
document.getElementById('buttonId').addEventListener('click',grid);





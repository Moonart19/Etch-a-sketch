const GRIDSIDE = 600;

const skecthArea = document.querySelector('.sketch-area');
const input = document.querySelector('.pop-up');
const rainbow = document.querySelector('.rainbow');
const clear = document.querySelector('.clear');
skecthArea.style.width = skecthArea.style.height = `${GRIDSIDE}px`;

let rainbowMode = false;

function setBgColor(){
    this.style.backgroundColor = "black";
}

function setRandColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeColorRandomly(e){
    e.target.style.background = setRandColor();
}

// Analyze this loop
function createGridCells(squarePerSide){
    const numberOfSquares = (squarePerSide * squarePerSide);
    const widthNdHeight = `${(GRIDSIDE / squarePerSide) - 2}px`;
    for (let i = 0; i < numberOfSquares; i++){
        const gridCell = document.createElement("div");
        
        gridCell.style.width = gridCell.style.height = widthNdHeight;
        gridCell.classList.add("cell")
        
        skecthArea.appendChild(gridCell);
        gridCell.addEventListener('mouseover', () => {
            if(rainbowMode){
                changeColorRandomly(event);
            }else{
                setBgColor.call(gridCell);
            }
        });
    }
}

function removeGridCells(){
    while (skecthArea.firstChild){
        skecthArea.removeChild(skecthArea.firstChild);
    }
}

input.addEventListener('click', () => {
    let squarePerSide = prompt("Enter the number of squares per side for new grid");
    if(squarePerSide > 100) {
        alert('Can only perform under 100');
    }
    removeGridCells();
    createGridCells(squarePerSide);
});

rainbow.addEventListener('click', () => {
        rainbowMode = !rainbowMode;  // Toggle rainbow mode on/off
        if (rainbowMode) {
            rainbow.style.backgroundColor = 'lightblue'; // Example to visually show rainbow mode is active
        } else {
            rainbow.style.backgroundColor = ''; // Reset background
        }
});

function clearGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })

}

clear.addEventListener('click', () => {
    clearGrid();
})

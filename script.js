const SIZE = 600;
const sketchArea = document.querySelector(".sketch-area");
sketchArea.style.width = `${SIZE}px`;

function createGrid(gridNum) {
    const gridSize = Math.pow(gridNum, 2);
    const cellDimensions = ((SIZE / gridNum) - 2).toFixed(2);
    
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.setAttribute("class","cell");
        div.style.height = `${cellDimensions}px`;
        div.style.width = `${cellDimensions}px`;
        sketchArea.appendChild(div);
    }
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = "black";
        });
    });
}

function clear(gridNum) {
    const children= sketchArea.querySelectorAll(".cell");
    children.forEach(child => {
        sketchArea.removeChild(child);
    });

    createGrid(gridNum)
}

const editGrid = document.querySelector(".edit-grid");
editGrid.addEventListener("click", () => {
    const gridNum = +prompt("Enter the number of squares per side");
    if(gridNum > 0 && gridNum < 100)
        clear(gridNum);
    else
        alert("Can't Do it blah!");
});


createGrid(16);

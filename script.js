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
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "orange";
            cell.style.border = "1px ridge blue";
        });
    });
}

    function applyColor(colorFunction) {
        darkOn = false;
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = colorFunction();
                cell.style.opacity = 1;
            });
        });
    }


    const orangeButton = document.querySelector(".orange-color");
    orangeButton.addEventListener('click', () => applyColor(() => "orange"));

    const randomButton = document.querySelector(".random-color");
    randomButton.addEventListener('click', () => applyColor(randomColor));
    
    const darkenButton = document.querySelector(".darken-color");
    let darkOn = true;
    darkenButton.addEventListener('click', () => { 
        darkOn = true;
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            let opacityLevel = 0;
            cell.addEventListener('mouseover', () => {
                if(darkOn) {
                    if(opacityLevel < 1) {
                        opacityLevel += 0.1;
                        cell.style.opacity = opacityLevel;
                    }
                }
        });
    });

});

    

    function clear(gridNum) {
        const children= sketchArea.querySelectorAll(".cell");
        children.forEach(child => {
            sketchArea.removeChild(child);
        });
        
        createGrid(gridNum);
    }
    
    const editGrid = document.querySelector(".edit-grid");
    editGrid.addEventListener("click", () => {
        const gridNum = +prompt("Enter the number of squares per side");
        if(gridNum > 0 && gridNum < 100)
            clear(gridNum);
        else
            alert("Please enter a number between 1 and 100!");
});


    function randomColor () {
        let random = () => {
            return (Math.random() * 255).toFixed(0);
        }
        return `rgb(${random()},${random()},${random()})`;
    }


createGrid(16);

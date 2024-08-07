function createGrid() {
    let container = null;
    if(document.querySelector("#container") != null){
        container = document.querySelector("#container")
    }
    else {
        container = document.createElement('div'); 
        container.setAttribute('id', 'container');
    }
    for(let i = 0; i<16; i++)
    {
        let subcontainer = document.createElement("div");
        subcontainer.style.display = "flex";
        subcontainer.classList.add("subcontainer");
        for(let i = 0; i<16; i++)
        {
            let square = document.createElement("div");
            square.style.display = "flex";
            square.classList.add("square");
            subcontainer.appendChild(square);
        }
        container.appendChild(subcontainer);
        let body = document.querySelector("body");
        let button = document.querySelector('button');
        body.insertBefore(container, button);


    }
}

function clearGrid () {
    document.querySelector("#container").remove();
    createGrid();
    giveListeners();
}

createGrid();
giveListeners();

function giveListeners() {
const squares = document.querySelectorAll(".square");
squares.forEach((square) => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "blue";
}))
}

button = document.querySelector('.btn');
button.addEventListener("click", () => clearGrid());




initalizeButton()
createGrid(16);

function promptUserForSize() {
    let userInput = prompt("Please enter the size of grid")
    if (!isNaN(parseInt(userInput)) && Number.isInteger(Number(userInput))) {
        let userNumber = parseInt(userInput)
        if (userNumber <= 100) return userNumber
        else {
            console.log("Greater than 100")
            promptUserForSize()
        }    
    }
    else {
        console.log("Not an integer")
        promptUserForSize()
    }
}




function initalizeButton() {
    const button = document.querySelector('button')
    button.addEventListener('click', () => {
    refreshPage();
    })
}

function getHeightPercentage(gridsize) {
    const rows = document.querySelectorAll(".row")
    rows.forEach((element) => {
        element.style.height = `${((1 / gridsize) * (9 / 10))* 100}vh`;
    })
}

function addEventListeners() {
    let rows = document.querySelectorAll('.row')
    rows.forEach((element)=> {
        element.addEventListener("mouseover", ()=> {
            element.style.backgroundColor = `rgb(${Math.random() *256},${Math.random() *256},${Math.random() * 256})`
        })
    })
}

//initalizes a grid based on input
function createGrid(gridsize) {
    console.log(gridsize.type)
    let container = document.querySelector(".container")
    for (let i = 0; i < gridsize;i++) {
        let column = document.createElement('div')
        column.className = 'column'
        for(let j = 0; j < gridsize;j++) {
            let row = document.createElement('div')
            row.className = 'row'
            column.appendChild(row);
        }
        container.appendChild(column)
    }
    getHeightPercentage(16)
    addEventListeners()
}
//removes elements and creates a new grid.
function refreshPage() {
    const container = document.querySelector(".container")
    const col = document.querySelectorAll('.column')
    col.forEach((element) => {
        element.remove()
    })
    console.log("creating new")
    console.log(container)
    createGrid(promptUserForSize());
}


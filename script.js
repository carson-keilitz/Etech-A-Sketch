function createGrid(gridsize) {
    const container = document.querySelector(".container")
    console.log(container)
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
}
createGrid(16);

const h = 800; // Height
const w = 800; // Width
const s = 40;  // Size of squares
const rows = Math.floor(h / s);
const cols = Math.floor(w / s);
let cells = new Array(cols);



function setup() {
    createCanvas(800, 800);
    background(50);
    for(let i = 0; i < cols; i++){
        cells[i] = new Array(rows);
        for(let j = 0; j < rows; j++){
            cells[i][j] = new Cell(i, j);
        }
    }
}


function draw() {
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            cells[i][j].render(s);
        }
    }
}
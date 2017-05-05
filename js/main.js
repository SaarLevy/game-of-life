const h = 800; // Height
const w = 800; // Width
const s = 20;  // Size of squares
const rows = Math.floor(h / s);
const cols = Math.floor(w / s);
let cells = new Array(cols);
let runButton;



function setup() {
    createCanvas(w, h);
    for(let i = 0; i < cols; i++){
        cells[i] = new Array(rows);
        for(let j = 0; j < rows; j++){
            cells[i][j] = new Cell(i, j);
        }
    }
    runButton = document.getElementById("run-button");
}


function draw() {
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            if(runButton.checked === true){
                cells[j][i].update(cells);
                if(cells[i][j].survives){
                    cells[i][j].alive = true;
                }else {
                    cells[i][j].alive = false;
                }
            }
            cells[i][j].render(s);
        }
    }
}

function mousePressed(){
    const x = floor(map(mouseX, 0, width, 0, cols));
    const y = floor(map(mouseY, 0, height, 0, rows));

    cells[x][y].alive = !cells[x][y].alive;
}
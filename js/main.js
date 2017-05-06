const h = 800; //Height
const w = 800; //Width
const s = 80;  //Size of squares
const rows = Math.floor(h / s);
const cols = Math.floor(w / s);
let cells = new Array(cols);
//let runButton;
let isActive = false;


//A p5 function that is called once when the page is sketch is loaded
function setup() {
    frameRate(24);
    createCanvas(w, h);
    for(let i = 0; i < cols; i++){
        cells[i] = new Array(rows);
        for(let j = 0; j < rows; j++){
            cells[i][j] = new Cell(i, j);
        }
    }
    //runButton = document.getElementById("run-button");
}


//A p5 function that is called every frame
function draw() {
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            if(isActive === true){
                cells[i][j].update(cells);
                if(cells[i][j].survives){
                    cells[i][j] = true;
                }else{
                    cells[i][j] = false;
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


const h = 800; //Height
const w = 800; //Width
const s = 10;  //Size of squares
const rows = Math.floor(h / s);
const cols = Math.floor(w / s);
let cells = new Array(cols + 2); //+2 for zero padding
let isActive = false;
let slider;


//A p5 function that is called once when the page is sketch is loaded
function setup() {
    createCanvas(w, h);
    slider = createSlider(0, 1, 0, 1);
    for(let i = 0; i < cols; i++){
        cells[i] = new Array(rows + 2); //+2 for zero padding
        for(let j = 0; j < rows; j++){
            cells[i][j] = new Cell(i, j);
        }
    }
}


//A p5 function that is called every frame
function draw() {
    for(i = 1; i < cols - 1 ; i++){ 
        for(j = 1; j < rows - 1; j++){ // Don't loop padded cells
            if(slider.value() === 1){
                cells[i][j].update(cells);
            }
            cells[i][j].render(s);
            cells[i][j].alive = cells[i][j].survives;
        }
    }

}

function mousePressed() {
    const x = floor(map(mouseX, 0, width, 0, cols));
    const y = floor(map(mouseY, 0, height, 0, rows));

    cells[x][y].survives = !cells[x][y].survives;
    cells[x][y].alive = !cells[x][y].alive;
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        for(i = 0; i < cols; i++){
            for(j = 0; j < rows; j++){
                cells[i][j].update(cells);
            }
        }  
    }
}

function Cell(i, j){
    this.i = i;
    this.j = j;
    this.alive = false;
    this.survives = false; //Made so not to change alive variabe mid-loop, also controls birthing of new cells
    this.neighbours = 0;
}


Cell.prototype.countNeighbours = function(grid){

    //Variables to make the conditionals below shorter
    const top     = this.j - 1;
    const right   = this.i + 1;
    const bottom  = this.j + 1;
    const left    = this.i - 1;
    const middlei = this.i;
    const middlej = this.j;
    
    try{
        if(grid[left][top] && grid[left][top].alive) {neighbours++;} //Left top
        if(grid[middlei][top] && grid[middlei][top].alive) {neighbours++;} //Middlei top
        if(grid[right][top] && grid[right][top].alive) {neighbours++;} //Right top
        if(grid[left][middlej] && grid[left][middlej].alive) {neighbours++;} //Left middlej
        if(grid[right][middlej] && grid[right][middlej].alive) {neighbours++;} //Right middlej
        if(grid[left][bottom] && grid[left][bottom].alive) {neighbours++;} //Left bottom
        if(grid[middlei][bottom] && grid[middlei][bottom].alive) {neighbours++;} //Middlei bottom
        if(grid[right][bottom] && grid[right][bottom].alive) {neighbours++;} //Right bottom

    } catch(ArrayIndexOutOfBoundsException){

    }
    
     
}


Cell.prototype.update = function(grid){
    
    this.countNeighbours(grid);

    //This is where the magic happens:
    //Should each cell survive next turn? 
    if(this.alive && this.neighbours.length < 2) {this.survives = false;}
    if(this.alive && (this.neighbours.length === 2 || this.neighbours.length === 3)) {this.survives = true;}
    if(this.alive && this.neighbours.length > 3){this.survives = false;}
    if(!this.alive && this.neighbours.length === 3){this.survives = true;}

}

Cell.prototype.render = function(size) {

    //Decide which color the cells should be and push the current draw mode as to not affect any future redering
    push();
    if(this.alive){
        stroke(255);
        fill(255, 0, 50);
    } else {
        stroke(255);
        fill(180);
    }
    rect(this.i * s, this.j*s, s, s);
    pop();
} 
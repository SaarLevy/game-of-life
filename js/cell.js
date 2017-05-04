
function Cell(i, j){
    this.i = i;
    this.j = j;
    this.alive = false;
    this.survives = false; //ALso controls birthing of new cells
    this.neighbours = [];
}


Cell.prototype.countNeighbours = function(grid){
    const top     = this.j - 1;
    const right   = this.i + 1;
    const bottom  = this.j + 1;
    const left    = this.i - 1;
    const middlei = this.i;
    const middlej = this.j;

    //TODO
    if(grid[left][top] > -1 && grid[left][top]){ this.neighbours.push(grid[left][top]);} //Left top
    if(grid[middlei][top] > -1 && grid[middlei][top]){ this.neighbours.push(grid[middlei][top]);} //Middlei top
    if(grid[right][top] > -1 && grid[right][top]){ this.neighbours.push(grid[right][top]);} //Right top
    if(grid[left][middlej] > -1 && grid[left][middlej]){ this.neighbours.push(grid[left][middlej]);} //Left middlej
    if(grid[right][middlej] > -1 && grid[right][middlej]){ this.neighbours.push(grid[right][middlej]);} //Right middlej
    if(grid[left][bottom] > -1 && grid[left][bottom]){ this.neighbours.push(grid[left][bottom]);} //Left bottom
    if(grid[middlei][bottom] > -1 && grid[middlei][bottom]){ this.neighbours.push(grid[middlei][bottom]);} //Middlei bottom
    if(grid[right][bottom] > -1 && grid[right][bottom]){ this.neighbours.push(grid[right][bottom]);} //Right bottom
}

Cell.prototype.update = function(grid){

    
    // //This is where the magic happens:
    // if(this.alive && this.neighbours.length < 2) {this.survives = false;}
    // if(this.alive && (this.neighbours.length === 2 || this.neighbours.length === 3)) {this.survives = true;}
    // if(this.alive && this.neighbours.length > 3){this.survives = false;}
    // if(!this.alive && this.neighbours.length === 3){this.survives = true;}
}

Cell.prototype.render = function(size) {

    if(this.alive){
        stroke(255);
        fill(255, 0, 50);
    } else {
        stroke(255);
        fill(180);
    }
    rect(this.i * s, this.j*s, s, s);
    
} 

function Cell(i, j){
    this.i = i;
    this.j = j;
    this.alive = false;
    this.survives = false; //ALso controls birthing of new cells
    this.neighbours = [];
}

//TODO: find a way to make this function neater
Cell.prototype.neighbours = function(grid){

    const top     = this.j-1;
    const right   = this.i+1;
    const bottom  = this.j+1;
    const left    = this.i-1;
    const middlei = this.i;
    const middlej = this.j;

    if(grid[left][top] != undefined && grid[left][top]){ this.neighbours.push(grid[left][top]);} //Left top
    if(grid[middlei][top] != undefined && grid[middlei][top]){ this.neighbours.push(grid[middlei][top]);} //Middlei top
    if(grid[right][top] != undefined && grid[right][top]){ this.neighbours.push(grid[right][top]);} //Right top
    if(grid[left][middlej] != undefined && grid[left][middlej]){ this.neighbours.push(grid[left][middlej]);} //Left middlej
    if(grid[right][middlej] != undefined && grid[right][middlej]){ this.neighbours.push(grid[right][middlej]);} //Right middlej
    if(grid[left][bottom] != undefined && grid[left][bottom]){ this.neighbours.push(grid[left][bottom]);} //Left bottom
    if(grid[middlei][bottom] != undefined && grid[middlei][bottom]){ this.neighbours.push(grid[middlei][bottom]);} //Middlei bottom
    if(grid[right][bottom] != undefined && grid[right][bottom]){ this.neighbours.push(grid[right][bottom]);} //Right bottom
    
}

Cell.prototype.update = function(){
    const liveNeighbours = this.neighbours.length;
    if(this.alive && liveNeighbours < 2) {this.survives = false;}
    if(this.alive && (liveNeighbours === 2 || liveNeighbours === 3)) {this.survives = true;}
    if(this.alive && liveNeighbours > 3){this.survives = false;}
    if(!this.alive && liveNeighbours === 3){this.survives = true;}
}

Cell.prototype.render = function(size) {
    
    stroke(255);
    fill(255, 0, 50);
    rect(this.i * s, this.j*s, s, s);

} 
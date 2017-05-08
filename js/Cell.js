class Cell{
    constructor(i,j){
        this.i = i;
        this.j = j;
        this.alive = false;
        this.survives = false; //Made so not to change alive variabe mid-loop, also controls birthing of new cells
        
    }

    update(grid){
        let neighbours = 0;
        //Variables to make the conditionals below shorter
        const top     = this.j - 1;
        const right   = this.i + 1;
        const bottom  = this.j + 1;
        const left    = this.i - 1;
        const middlei = this.i;
        const middlej = this.j;
        
        //Check all the cells around a given cell
        try{
            if(grid[left][top] && grid[left][top].alive) {neighbours++;} //Left top
            if(grid[middlei][top] && grid[middlei][top].alive) {neighbours++;} //Middlei top
            if(grid[right][top] && grid[right][top].alive) {neighbours++;} //Right top
            if(grid[left][middlej] && grid[left][middlej].alive) {neighbours++;} //Left middlej
            if(grid[right][middlej] && grid[right][middlej].alive) {neighbours++;} //Right middlej
            if(grid[left][bottom] && grid[left][bottom].alive) {neighbours++;} //Left bottom
            if(grid[middlei][bottom] && grid[middlei][bottom].alive) {neighbours++;} //Middlei bottom
            if(grid[right][bottom] && grid[right][bottom].alive) {neighbours++;} //Right bottom
        } catch(ArrayIndexOutOfBoundsException) {}


        //This is where the magic happens:
        if(this.alive && neighbours < 2) {this.survives = false;}
        else if(this.alive && (neighbours === 2 || this.neighbours === 3)) {this.survives = true;}
        else if(this.alive && neighbours > 3){this.survives = false;}
        else if(!this.alive && neighbours === 3){this.survives = true;}
    }

    render(size){
        if(this.alive){
            stroke(255);
            fill(255, 0, 50);
        }else{
            stroke(255);
            fill(180);
        }
        rect(this.i*size - size, this.j*size - size, size, size);
    }
    

}



function Cell(i, j){
    this.i = i;
    this.j = j;
    this.alive = false;
}

Cell.prototype.render = function() {
    
    stroke(255);
    fill(255, 0, 50);
    rect(this.i * s, this.j*s, s, s);

} 
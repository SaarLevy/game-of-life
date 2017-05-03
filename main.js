
const renderer = new PIXI.WebGlRenderer(800, 800);
document.body.appendChild(renderer.view);
const stage = new PIXI.Container();


const s = 40;
const rows = Math.floor(800 / s);
const cols = Math.floor(800 / s);

for (j = 0; j < cols; j++){
    for(i =0; i < rows; i++){
        var rect = new PIXI.Graphics();
        rect.lineStyle(1, 0xFFFFFF, 1);
        stage.addChild(rect);
    }
}



renderer.render(stage);
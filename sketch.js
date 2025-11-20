
let hotspot;
let baker = [];

function preload() {
    hotspot = loadTable("hotspot.csv")
}

function setup() {
   createCanvas (900, 300);
   for (let i = 1; i < hotspot.getRowCount(); i++) {
    baker[i] = hotspot.getNum(i, 4);
   }
}

function draw() {
    background (400);

    //Graph_lines
    stroke (100);
    line (20, 100, 20, 10);
    line ( 20, 100, 760, 100);
    for (let i = 1; i < baker.length; i++) {
        let x = map (i, 0, baker.length-1, 20, 760);
        line (x, 10, x, 100);

    }

    noFill();
    stroke("red");
    strokeWeight(3);


    //Gragh_values
    beginShape();
    for (let i = 1; i < baker.length; i++) {
        let x = map(i, 0, baker.length-1, 760, 20);
        let y = map(baker[i], 0, 70, 130, 30);
        vertex(x, y);
    }
    endShape();



}

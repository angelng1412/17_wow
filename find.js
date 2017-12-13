var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth; 
var targetY = Math.random() * boxHeight; 
//var targetX = boxWidth / 2; 
//var targetY = boxHeight / 2; 

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var retVal = Math.sqrt( ((x1-x0)**2) + ((y1-y0)**2) );
    //console.log(retVal);
    return retVal;
};


var findIt = function(e) {
    var mouseX = e.x;
    var mouseY = e.y;
    var dist = distance(mouseX, mouseY, targetX, targetY);
    box.style.background = color(dist);
    //console.log(boxColor);
    found(dist); 
    console.log(dist); 
    //console.log("xpos: " + mouseX);
    //console.log("ypos: " + mouseY); 
};

var color = function(dist){
    var insideColor = 100 - Math.floor(dist / 10);
    var retVal  = "hsl(0, 100%, " + insideColor + "%)";
    return retVal; 
}

var found = function (dist){
    if (dist < 50){
	box.style.background = "#00ff00";
    }
}

box.addEventListener("mousemove", findIt);

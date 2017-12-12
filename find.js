var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

var mouseX = mousemove.clientX
var mouseY = mousemove.clientY;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var retVal = Math.sqrt( ((x1-x0)**2) + ((y1-y0)**2) );
    //    console.log(retVal);
    return retVal;
};


var findIt = function(e) {
    console.log(distance(targetX, targetY, mouseX, mouseY));
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);

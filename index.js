svg = document.getElementById("svg_id");
clear = document.getElementById("clear");
stop = document.getElementById("stop");
circle = document.getElementById("circle");
box = document.getElementById("box");

var id;

clear.addEventListener("click", function(){
    while (svg.firstChild) {
	svg.removeChild(svg.firstChild);
    }
});

stop.addEventListener("click", function(){
    clearInterval(id);
});

var drawCircle = function(){
    var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir.setAttribute("cx", 250);
    cir.setAttribute("cy", 250);
    cir.setAttribute("r", 0);
    svg.appendChild(cir);
    return cir;
};

circle.addEventListener("click", function(){
    clearInterval(id);
    
    var cir = drawCircle();
    var st = 1; var r = 0;
    id = setInterval(function(){
	r += st;
	cir.setAttribute("r", r);
	if (cir.getAttribute("r") > 250 || cir.getAttribute("r") < 0){
	    st *= -1;
	}
    }, 10);
});

var drawRect = function(){
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", 20);
    rect.setAttribute("height", 25);
    svg.appendChild(rect);
    return rect;
};

box.addEventListener("click", function(){
    clearInterval(id);
    
    rect = drawRect();
    var dx = 4.2; var dy = 3.4; var x = 0; var y = 0;
    id = setInterval(function(){
	x += dx;
	y += dy;
	rect.setAttribute("x", x);
	rect.setAttribute("y", y);
	if(x < 0 || x + 20 > 500){
	    dx *= -1;
	}
	if(y < 0 || y + 25 > 500){
	    dy *= -1;
	}
    }, 10);
});


var earth = document.getElementById("init");
var pluto = document.getElementById("final");
var ship = document.getElementById("spaceship");

var pos = earth.getBoundingClientRect();
console.log(pos);
ship.style.postion = "absolute";
ship.style.left = pos.left;
ship.style.top = pos.top;

var final = pluto.getBoundingClientRect();
console.log(final);



var posleft = pos.left;
var postop = pos.top;
var id = setInterval(frame, 100);
function frame() {
	var final = pluto.getBoundingClientRect();
    if (posleft == final.left && postop == final.top) {
        clearInterval(id);
    } else {
        if(posleft > final.left) posleft--;
        else posleft++;
		if(postop > final.top) postop--;
		else postop++;
        ship.style.left = posleft + 'px'; 
        ship.style.top = postop + 'px'; 
    }
}
var startTime = Date.now()
function getRandom(x,y){
	return (Math.floor(Math.random()*y) + 1 + x);
}
function getColor(){
	var letters = '0123456789ABCDEF';
	var color = '#'
	for(var i=0;i<6;i++){
		color += letters[getRandom(0,16)]
	}
	return color;
}
function getHeight(){
	return getRandom(50,200);
}
function getWidth(){
	return getRandom(50,200);
}
function getMarginTop(height){
	return getRandom(0,350-height);
}
function getMarginLeft(width){
	return getRandom(0,1000-width);
}
document.getElementById('figure').onclick = function() {
	var timeTaken = (Date.now() - startTime)/1000;
	document.getElementById('time').innerHTML = timeTaken + 's';
	startTime = Date.now();
	var height = getHeight();
	var width =  getWidth();
	var mTop = getMarginTop(height);
	var mLeft = getMarginLeft(width);
	shape = getRandom(0,2);
	if(shape==1){
		document.getElementById('figure').style.borderRadius = "0%";
		document.getElementById('figure').style.width = width;
		document.getElementById('figure').style.height = height;
	}
	if(shape==2){
		document.getElementById('figure').style.borderRadius = "50%";
		document.getElementById('figure').style.width = width;
		document.getElementById('figure').style.height = width;
	}
	document.getElementById('figure').style.backgroundColor = getColor();
	document.getElementById('figure').style.marginTop = mTop;
	document.getElementById('figure').style.marginLeft = mLeft;
}
console.log("Analogue Clock");
console.log("Version: 1.0");


var height = 0, width = 0, minV = 0;

function setup()
{
	height = displayHeight - 5;
	width = displayWidth;
	minV = Math.min(height, width)

	createCanvas(width, height);
	frameRate(60);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textSize(50);
}

function draw()
{
	var date = new Date();
	var time = date.getTime();
	time /= 1000;
	time = parseInt(time);
	var second = time % 60;
	time /= 60;
	time = parseInt(time);
	var minute = time % 60;
	time /= 12;
	time = parseInt(time);
	time -= 10;
	var hour = time % 12;

	if(hour == 0)
	{
		hour = 12;
	}

	var sA = -(second / 60) * 2 * Math.PI;
	var mA = -((second + minute * 60) / 3600) * 2 * Math.PI;
	var hA = -((second + minute * 60 + hour * 12) / 43200) * 2 * Math.PI;

	//console.log(hour + ": " + minute + ": " + second);
	background(0);
	fill(255);
	noStroke();
	circle(width / 2, height / 2, 25);
	stroke(255);
	strokeWeight(1);
	line(width / 2, height / 2, width / 2 + (minV / 2 - 90) * Math.cos(sA + Math.PI / 2), height / 2 - (minV / 2 - 90) * Math.sin(sA + Math.PI / 2));
	strokeWeight(5);
	line(width / 2, height / 2, width / 2 + (minV / 2 - 150) * Math.cos(mA + Math.PI / 2), height / 2 - (minV / 2 - 150) * Math.sin(mA + Math.PI / 2));
	strokeWeight(9);
	line(width / 2, height / 2, width / 2 + (minV / 2 - 210) * Math.cos(hA + Math.PI / 2), height / 2 - (minV / 2 - 210) * Math.sin(hA + Math.PI / 2));
	noStroke();
	text("12", width / 2, 50);
	text("6", width / 2, height - 50);
	text("3", width / 2 + minV / 2 - 50, height / 2);
	text("9", width / 2 - minV / 2 + 50, height / 2);
	text("1", width / 2 + (minV / 2 - 50) * Math.cos(Math.PI / 3), height / 2 - (minV / 2 - 50) * Math.sin(Math.PI / 3));
	text("2", width / 2 + (minV / 2 - 50) * Math.cos(Math.PI / 6), height / 2 - (minV / 2 - 50) * Math.sin(Math.PI / 6));
	text("4", width / 2 + (minV / 2 - 50) * Math.cos(Math.PI / 6), height / 2 + (minV / 2 - 50) * Math.sin(Math.PI / 6));
	text("5", width / 2 + (minV / 2 - 50) * Math.cos(Math.PI / 3), height / 2 + (minV / 2 - 50) * Math.sin(Math.PI / 3));
	text("7", width / 2 - (minV / 2 - 50) * Math.cos(Math.PI / 3), height / 2 + (minV / 2 - 50) * Math.sin(Math.PI / 3));
	text("8", width / 2 - (minV / 2 - 50) * Math.cos(Math.PI / 6), height / 2 + (minV / 2 - 50) * Math.sin(Math.PI / 6));
	text("10", width / 2 - (minV / 2 - 50) * Math.cos(Math.PI / 6), height / 2 - (minV / 2 - 50) * Math.sin(Math.PI / 6));
	text("11", width / 2 - (minV / 2 - 50) * Math.cos(Math.PI / 3), height / 2 - (minV / 2 - 50) * Math.sin(Math.PI / 3));
}
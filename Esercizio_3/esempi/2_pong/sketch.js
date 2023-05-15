let posizioneX = 200
let posizioneY = 200
let velX
let velY

function setup(){
	createCanvas(600, 400)
	posizioneX = width/2
	posizioneY = height/2
	velX = random(-4,4)
	velY = 5

	background(200)

}

function draw(){
	
	//fill(random(200,255), random(200), random(255))
	//esempio 
	fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255))
	ellipse(posizioneX,posizioneY,400,400)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width) velX = -velX
	if (posizioneX <= 0) velX = -velX

	if (posizioneY >= height) velY = -velY
	if (posizioneY <= 0) velY = -velY

}

	function KeyPressed(){
		
		save("pong.png")

}
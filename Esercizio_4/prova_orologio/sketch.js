function setup(){
	createCanvas(400,400)	
	
	background(200)
}

function draw(){



let ora = hour() + ":" + minute() + ":" + second()



textSize(40)
textFont("monospace")
fill (random(255),random(255),random(255))
// textAlign(CENTER,CENTER) mettendo text("ciao",width/2, height/2)
// text("ora",mouseX,mouseY)

textAlign(CENTER,CENTER)
text(ora,mouseX, mouseY)

}


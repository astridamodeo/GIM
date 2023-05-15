function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)	
}

function draw(){
	background(0,0,0)
	
rotateX(mouseY*0.1)

// randomSeed per freezare l'animazione


for(let i=0; i<50; i=i+1) {
//let è la variabile
	
	let lato = 800
	let spessore = random(1,3)
	let lunghezza = random(60,150)
	let posX = random(-lato,lato)
	let posY = random(-lato, lato)
	let posZ = random(-lato,lato)
	



	stroke(255)
	strokeWeight(spessore)
	
	line(posX,posY, posZ, posX+1, posY + lunghezza, posZ)

}


}

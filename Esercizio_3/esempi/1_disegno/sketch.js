function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(180)

	point(42,50)
	point(0,0)
	point(43,50)
	
	// funzione che disegna un segmento e forme
	// fill = funzione colore, anche opacità
	// noFill = no colore
	// stroke = cambiare colore traccia

	stroke(280)
	strokeWeight(3)
	fill(250,70,130,80)
	rect(120,120,90,90)
	line(50,60,200,280)
	rect(150,150,90,90)
	
	noFill()
	triangle(200,90,200,300,100,300)
	
	ellipse(180,180,90,120)

}
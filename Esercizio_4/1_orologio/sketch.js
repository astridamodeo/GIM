function setup(){
	createCanvas(windowWidth,windowHeight)	
}

function draw(){
	
	//spostare origine al centro
	translate(width/2,height/2)
	// rotate(mouseX * 0.01)
	
	// scale(0.9) serve per scalare per vederlo bene nella versione mobile

	//scrivo tutte le variabili sopra per facilitare il lavoro sotto
	let h = hour()
	let m = minute()
	let s = second()
	//millisecondi:  let ms = new Date().getMilliseconds()
	
	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m
	let angolo_m = TWO_PI / 60 * m
	let angolo_s = TWO_PI / 60 * s
	
	background(40)
	
	// cerchio
	fill(180)
	noStroke()
	ellipse(0,0,420,420)

	// cerchio
	fill(220)
	ellipse(0,0,400,400)
	
	//lancetta ore
	push()
	noStroke()
	fill(180)
	rotate(angolo_h)
	rect(-2.5,20,5,-110)
	pop()
	
	//lancetta minuti
	push()
	//rotate(TWO_PI / 60 * minute())
	rotate(angolo_m)
	noStroke()
	fill(160)
	rect(-1.5,20,3,-145)
	pop()
	
	//lancetta secondi
	push()
	rotate(angolo_s)
	noStroke()
	fill(140)
	rect(-0.5,20,1,-155)
	pop()
	
	// cerchio interno
	noStroke()
	fill(40)
	ellipse(0,0,8,8)
	
	fill(200)
	push()
	for (let i=0; i<60; i++) { 
		rect(-1,-185,2,20)
		rotate (TWO_PI / 60)
	}
	pop()
	
	
	fill(200)
	push()
	for (let i=0; i<60; i++) { 
		if (i % 5 == 0) {
			rect(-1.5,-185,3,35)
		} else {
			rect(-1,-185,2,5)
		}

	
		rotate (TWO_PI / 60)
	}
	pop()


}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)

}
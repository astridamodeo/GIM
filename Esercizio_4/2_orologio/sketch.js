// Variabili per il canvas
var canvasWidth, canvasHeight;

// Variabili per l'effetto di tunnel
var centerX, centerY;

// Variabili per le linee a spirale
var spiralStartRadiusSeconds = 70;
var spiralStartRadiusMinutes = 100;
var spiralStartRadiusHours = 130;
var spiralEndRadius;

// Variabili per i numeri
var numSize = 16;
var numbers = [];

// Inizializzazione del canvas
function setup() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  createCanvas(canvasWidth, canvasHeight);
  centerX = canvasWidth / 2;
  centerY = canvasHeight / 2;
  spiralEndRadius = max(canvasWidth, canvasHeight);

  // Generazione dei numeri iniziali
  generateNumbers();
}

// Generazione dei numeri casuali
function generateNumbers() {
  numbers = [];

  // Generazione dei numeri dei secondi
  for (var radius = spiralStartRadiusSeconds; radius <= spiralEndRadius; radius++) {
    var lineAngle = map(radius, spiralStartRadiusSeconds, spiralEndRadius, 0, TWO_PI * 5);
    var x = cos(lineAngle) * radius + centerX;
    var y = sin(lineAngle) * radius + centerY;
    var number = {
      value: radius, // Numero corrispondente al raggio
      x: x,
      y: y,
      ySpeed: random(1, 5) // Velocità di caduta del numero (random)
    };
    numbers.push(number);
  }

  // Generazione dei numeri dei minuti
  for (var radius = spiralStartRadiusMinutes; radius <= spiralEndRadius; radius++) {
    var lineAngle = map(radius, spiralStartRadiusMinutes, spiralEndRadius, 0, TWO_PI * 5);
    var x = cos(lineAngle) * radius + centerX;
    var y = sin(lineAngle) * radius + centerY;
    var number = {
      value: radius, // Numero corrispondente al raggio
      x: x,
      y: y,
      ySpeed: random(1, 5) // Velocità di caduta del numero (random)
    };
    numbers.push(number);
  }

  // Generazione dei numeri delle ore
  for (var radius = spiralStartRadiusHours; radius <= spiralEndRadius; radius++) {
    var lineAngle = map(radius, spiralStartRadiusHours, spiralEndRadius, 0, TWO_PI * 12);
    var x = cos(lineAngle) * radius + centerX;
    var y = sin(lineAngle) * radius + centerY;
    var number = {
      value: radius, // Numero corrispondente al raggio
      x: x,
      y: y,
      ySpeed: random(1, 5) // Velocità di caduta del numero (random)
    };
    numbers.push(number);
  }
}

// Disegno degli elementi sul canvas
function draw() {
  background(0); // Sfondo nero

  // Calcolo dell'angolo di rotazione basato sul tempo reale
  var secondsAngle = map(second(), 0, 60, -HALF_PI, TWO_PI - HALF_PI);
  var minutesAngle = map(minute(), 0, 60, -HALF_PI, TWO_PI - HALF_PI);
  var hoursAngle = map(hour() % 12, 0, 12, -HALF_PI, TWO_PI - HALF_PI);

  // Disegno delle linee a spirale
  translate(centerX, centerY);

  // Linee dei secondi
  rotate(secondsAngle);
  stroke(255, 0, 0); // Colore rosso
  drawSpiralLines(spiralStartRadiusSeconds);

  // Linee dei minuti
  rotate(minutesAngle - secondsAngle);
  stroke(0, 255, 0); // Colore verde
  drawSpiralLines(spiralStartRadiusMinutes);

  // Linee delle ore
  rotate(hoursAngle - minutesAngle);
  stroke(0, 0, 255); // Colore blu
  drawSpiralLines(spiralStartRadiusHours);

  // Movimento dei numeri in caduta libera
  var gravity = 0.1; // Gravità che influenza la caduta
  var maxSpeed = 5; // Velocità massima di caduta

  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.y += number.ySpeed;
    number.ySpeed += gravity;
    number.ySpeed = min(number.ySpeed, maxSpeed);

    // Riavvio dei numeri sopra il canvas quando raggiungono il bordo inferiore
    if (number.y > canvasHeight) {
      number.y = -numSize;
    }
  }
}

// Funzione per disegnare le linee a spirale
function drawSpiralLines(spiralStartRadius) {
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var lineAngle = map(number.value, spiralStartRadius, spiralEndRadius, 0, TWO_PI * 5);
    var x1 = cos(lineAngle) * number.value;
    var y1 = sin(lineAngle) * number.value;
    var x2 = cos(lineAngle) * spiralEndRadius;
    var y2 = sin(lineAngle) * spiralEndRadius;

    line(x1, y1, x2, y2);

    // Disegno dei numeri lungo le linee a spirale
    push();
    translate(x2, y2);
    rotate(lineAngle);
    textSize(numSize);
    textAlign(CENTER, CENTER);
    fill(255); // Testo bianco
    text(number.value, 0, number.y);
    pop();
  }
}

// Aggiornamento delle dimensioni del canvas al ridimensionamento della finestra
function windowResized() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(canvasWidth, canvasHeight);
  centerX = canvasWidth / 2;
  centerY = canvasHeight / 2;
  spiralEndRadius = max(canvasWidth, canvasHeight);
  generateNumbers();
}

// Avvio dell'esecuzione
setup();

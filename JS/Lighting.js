//modify of https://codepen.io/SoorajSnBlz/pen/LYZGjBj , comments done as proof of understanding

//Fetching page element to edit

let dpi = window.devicePixelRatio;
let canvas = document.getElementById("ThemedBgd");
let context = canvas.getContext('2d');
//delaration of non changable values
function fix_dpi() {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
    }
fix_dpi();
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
//delaration of changable values
const lightningStrikeOffset = 30;
const lightningStrikeLength = canvasHeight;
const lightningBoltLength = 10;
const lightningThickness = 4;
const interval = Math.random()* (60000 - 5000) + 5000; //randomizes the time between lighting strikes between 5 and 60 seconds




const createVector = function(x, y) 
{ 
    return { x, y } 
}


const clearCanvas = function(x, y, height, width)
{
  rectX = x || 0;
  rectY = y || 0;
  rectHeight = height || canvasHeight;
  rectWidth = width || canvasWidth;
  context.clearRect(rectX, rectY, rectWidth, rectHeight);
  context.beginPath();
}

const line = function(start, end, thickness, opacity)
{
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.lineWidth = thickness;
  context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
  context.shadowBlur = 10;
  context.shadowColor = "#bd9df2";
  context.stroke();
  context.closePath();
}

class Lightning 
{
  constructor(x1, y1, x2, y2, thickness, opacity) {
    this.start = createVector(x1, y1);
    this.end = createVector(x2, y2);
    this.thickness = thickness;
    this.opacity = opacity;
  }
  draw() {
    return line(this.start, this.end, this.thickness, this.opacity);
  }
}

let lightning = [];


const createLightning = function() 
{
    lightning = [];

    let lightningX1 = Math.floor(Math.random() * ((canvasWidth - 2) - (2) + 1) + (2));
    let lightningX2 = Math.floor(Math.random() * (lightningX1 + lightningStrikeOffset - (lightningX1 - lightningStrikeOffset) + 1) + (lightningX1 - lightningStrikeOffset)); 

    lightning[0] = new Lightning(lightningX1, 0, lightningX2, lightningBoltLength, lightningThickness, 1);
   
    for (let l = 1; l < lightningStrikeLength; l++)
    {
        let lastBolt = lightning[l - 1];
        let lx1 = lastBolt.end.x;
        let lx2 = Math.floor(Math.random() * (lx1 + lightningStrikeOffset - (lx1 - lightningStrikeOffset) + 1) + (lx1 - lightningStrikeOffset))
        lightning.push(new Lightning(
        lx1, 
        lastBolt.end.y, 
        lx2, 
        lastBolt.end.y + lightningBoltLength, 
        lastBolt.thickness, 
        lastBolt.opacity
        ));
    }
}


const setup = function() 
{
  createLightning();
  for (let i = 0 ; i < lightning.length ; i++) {
    lightning[i].draw();
  }
}

const animate = function() 
{
    clearCanvas();

    for (let i = 0 ; i < lightning.length ; i++)
    {
        lightning[i].opacity -= 0.01;
        lightning[i].thickness -= 0.05;
        if (lightning[i].thickness <= 2) 
        {
            lightning[i].end.y -= 0.05;
        }
        lightning[i].draw();
    }

  requestAnimationFrame(animate);
}

setup();
requestAnimationFrame(animate);
setInterval(function() {createLightning();}, interval);
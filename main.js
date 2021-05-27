canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

roverx = 10;
rovery = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add(){
    background_imagenew = new Image();
    background_imagenew.onload=uploadbackground;
    background_imagenew.src=background_image;

    rover_imagenew = new Image();
    rover_imagenew.onload=uploadrover;
    rover_imagenew.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imagenew,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imagenew,roverx,rovery,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
}
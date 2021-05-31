canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa 1.jpeg", "nasa 2.jpeg", "nasa 3.jpeg", "nasa 4.jpeg"];
random_number = Math.floor(Math.random() * 4);

rover_width = 100;
rover_height = 90;

roverx = 10;
rovery = 10;

background_image = nasa_mars_images_array[random_number];
console.log("background image = " + background_image);
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

function up(){
    if(rovery >= 0){
        rovery = rovery - 10;
        console.log("when up arrow is pressed, x = ",+ roverx + " and y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rovery <= 510){
        rovery = rovery + 10;
        console.log("when down arrow is pressed, x = ",+ roverx + " and y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(roverx >= 0){
        roverx = roverx - 10;
        console.log("when left arrow is pressed, x = ",+ roverx + " and y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(roverx <= 700){
        roverx = roverx + 10;
        console.log("when right arrow is pressed, x = ",+ roverx + " and y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}
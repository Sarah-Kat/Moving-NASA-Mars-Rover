canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["nasa_image1.jpeg","nasa_image2.jpg","nasa_image3.jpg","nasa_image4.jpg"];
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;

random_number = Math.floor(Math.random()*4);
console.log(random_number);


background_image = nasa_mars_images_array[random_number];
rover_image = "rover.png";

function add() {
    mars_imgTag = new Image();
    mars_imgTag.src = background_image;
    mars_imgTag.onload = upload_background;

    rover_imgTag = new Image();
    rover_imgTag.src = rover_image;
    rover_imgTag.onload = upload_rover;
}

function upload_background () {
    ctx.drawImage(mars_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_rover () {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var ascii = e.keyCode;
    console.log(ascii);

    if(ascii == 38) {
        console.log("up arrow key");
        up();
    }

    if(ascii == 40) {
        console.log("down arrow key");
        down();
    }
    if(ascii == 37) {
        console.log("left arrow key");
        left();
    }
    if(ascii == 39) {
        console.log("right arrow key");
        right();
    }


}

function up() {
    if(rover_y >=0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = "+ rover_x + "| y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function down() {
    if(rover_y <= 700) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = "+ rover_x+"| y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x =" + rover_x + "| y =" + rover_y);
        upload_background();
        upload_rover();
    }
}

function right() {
    if (rover_x <= 900) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = "+rover_x+"| y =" + rover_y);
        upload_background();
        upload_rover();
    }
}
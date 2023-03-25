function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

song = "";
songs = "";

 function preload() {
    song = loadSound("music.mp3");
    songs = loadSound("music2.mp3");
 }

 function draw() {
    image(video,0,0,600,500); 
 }
var canvas,redBox;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redBox=createSprite(100,580,200,20);
    redBox.shapeColor="red"; 
    greenBox=createSprite(300,580,200,20);
   greenBox.shapeColor="green"
    blueBox=createSprite(515,580,200,20);
    blueBox.shapeColor="blue"
    pinkBox=createSprite(650,580,200,20);
    pinkBox.shapeColor="pink"
                




    //create box sprite and give velocity
    Box=createSprite(random(100,500),100,40,40);
    Box.shapeColor="white"
    Box.velocityY=9;
    Box.velocityX=5;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
edges=createEdgeSprites()
Box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(redBox.isTouching(Box)){
    Box.shapeColor="red"
    music.play()
    Box.velocityX=0
    Box.velocityY=0
    }
    if(pinkBox.isTouching(Box)){
        Box.shapeColor="pink"
        }
        if(greenBox.isTouching(Box)){
            Box.shapeColor="green"
            }
            if(blueBox.isTouching(Box)){
                Box.shapeColor="blue"
                }
}

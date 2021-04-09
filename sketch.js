var catimg1,catimg2,catimg3
var garden,gardenimg
var mouseimg1,mouseimg2,mouseimg3
var cat; 
var mouse; 

function preload() {
    //load the images here
    catimg1 = loadAnimation("images/cat1.png")
    catimg2 = loadAnimation("images/cat2.png")
    catimg3 = loadAnimation("images/cat3.png")
    gardenimg = loadImage("images/garden.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    mouseimg2 = loadAnimation("images/mouse2.png")
    mouseimg3 = loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,600,100,100);
    cat.addAnimation("sitting",catimg1)
    cat.scale = 0.2; 
    
    mouse = createSprite(100,600,50,50)
    mouse.addAnimation("cheese",mouseimg1)
    mouse.scale = 0.15; 
}

function draw() {
    
    background(gardenimg);
    

    if (keyDown("left")){
        cat.velocityX = -5; 
        cat.addAnimation("cat2", catimg2); 
        cat.changeAnimation("cat2"); 
        
        mouse.addAnimation("mouse2", mouseimg2); 
        mouse.changeAnimation("mouse2"); 
    }
    
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX = 0
        cat.addAnimation("cat3", catimg3); 
        cat.changeAnimation("cat3"); 
        cat.scale = 0.2; 
        cat.x = 275; 

   
        mouse.addAnimation("mouse3", mouseimg3); 
        mouse.changeAnimation("mouse3"); 
        mouse.scale = 0.15; 

        
        
    }

   
    drawSprites();


 
}



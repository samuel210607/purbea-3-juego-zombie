var chica, chicaI, chicaM, chicaR, chicaN, chicaT, chicaA;
var zombie, zombieC, zombieT, zombie2, zombieC2, zombieT2; 
var  fondo, perdiste, perdisteI;
var state = 1;
var sueloI;
var bala, balaI, balaG, bala2, balaI2, balaG2;
var piedra, piedraI, piedraG;
var torre, torreI;
var plas, plasI, plasG;
var contador = 10;
var b;

function preload(){
  chicaI = loadAnimation ("chica corriendo .gif");
  chicaM = loadImage ("chicaMuestaBuena.jpg");
  chicaR = loadAnimation ("chicaRB.png", "chicaRB2.png", "chicaRB3.png");
  chicaN = loadImage ("chicaSB.png");
  chicaT = loadImage ("chicaTB.png");
  chicaA = loadAnimation ("chicaA.png");

  zombieC = loadAnimation ("zb1.png", "zb2.png");
  zombieT = loadAnimation  ("z6.png");
  zombieC2 = loadAnimation ("zr1.png", "zr2.png");
  zombieT2 = loadAnimation ("z3.png");

  fondo = loadImage ("fondo3.jpg");
  perdisteI = loadAnimation ("perdiste.gif");
  plasI = loadImage ("bolaN.png");
  torreI = loadImage ("torre.png");
  balaI = loadImage ("bola.png");
  balaI2 = loadImage ("bola2.png")

} 
function setup() {
  createCanvas (935, 400);


    perdiste = createSprite ( 467, 200);

  chica = createSprite (100, 360);
  chica.addAnimation ("corriendo", chicaI);
  chica.addAnimation ("muerta", chicaM);
  chica.addAnimation ("reversa", chicaR);
  chica.addAnimation ("neutra", chicaN);
  chica.addAnimation ("tira", chicaT);
  chica.addAnimation ("abajo", chicaA);
  chica.scale = 0.5;

  zombie = createSprite (740, 300);
  zombie.addAnimation ("running1", zombieC);
  zombie.addAnimation ("shoot1", zombieT)
  zombie.scale = 0.4;

  zombie2 = createSprite (400, 320);
  zombie2.addAnimation  ("running2", zombieC2);
 zombie2.addAnimation("shoot2", zombieT2),
  zombie2.scale = 0.3;

  sueloI = createSprite (467, 400, 935, 5);
  sueloI.visible = false; 
  
  balaG = createGroup ();
  balaG2 = createGroup ();
  plasG = createGroup ();

torre = createSprite (860, 210)
torre.addImage (torreI);
torre.scale = 0.45;

}
function draw() {
    background (fondo);
  
    b = createEdgeSprites ();
    chica.bounce(b);

    if (state === 1)
    {
if (mousePressedOver (perdiste) && state === 1){

}
        perdiste.visible = false;

        if (keyDown ("RIGHT_ARROW")){
          chica.changeAnimation ("corriendo", chicaI);
        chica.x = chica.x + 3;  
        chica.scale = 0.85;
        }
        
        else  {
          chica.changeAnimation ("neutra", chicaN);
          chica.scale = 0.6;
        }
    
        if(keyDown ("LEFT_ARROW")){
          chica.changeAnimation ("reversa", chicaR);
          chica.x = chica.x - 3;  
          chica.scale = 0.6;
          }

          if(keyDown ("DOWN_ARROW")){
            chica.changeAnimation ("abajo", chicaA);
            chica.scale = 0.7;
            }
    

    if (keyDown("space") && chica.y >= 330)
      {
   chica.velocityY = -16;
      
       }
    chica.velocityY = chica.velocityY + 0.8;
    // chica.collide (sueloI);
      
    if (keyIsDown(UP_ARROW) && contador >= 1)
    {
      chica.changeAnimation ("tira", chicaT);
      chica.scale = 0.36;
      balaN ();   
    }

//    if (zombie.x <= 640){
//zombie.velocityX = 2;
 //     } 
 //     if (zombie.x >= 740) {
 //       zombie.velocityX = -2;
 //     }
       
      if (zombie2.x <= 380){
       zombie2.velocityX = 2;

        } 
        if (zombie2.x >= 480) {
          zombie2.velocityX = -2;

        } 


        if (contador === 9 && plasG.collide (zombie2)){
          zombie2.velocityY = -15;
        }
        if (contador === 7 && plasG.collide (zombie2)){
          zombie2.velocityY = -15;
        }


        if (contador === 3 && plasG.collide (zombie)){
          zombie.velocityY = -15;
        }      
          if (contador === 1 && plasG.collide (zombie)){
          zombie.velocityY = -15;
        }

    //    bullet1();
      //  bullet2();

      if (balaG.isTouching(chica))
      {
        state = 0;
     }
      if (zombie.isTouching (chica)){
        state = 0;

     }
      if (zombie2.isTouching (chica)){
        state = 0;

      }
   }

    if (state === 0){
      
      perdiste.addAnimation ("perdi", perdisteI);
      perdiste.scale = 1.3;
      perdiste.visible = true;

      fondo.visible = false;
      perdiste.depth = chica.depth;
      chica.depth = chica.depth+1;
      perdiste.depth = zombie.depth;
      zombie.depth = zombie.depth + 1;

     chica.changeAnimation ("muerta", chicaM);
      zombie.velocityX = 0;
      zombie.velocityY = 0; 
    }

  if (mousePressedOver (perdiste)){
reset();
  }
    chica.collide (sueloI);
    zombie.collide (sueloI);
    zombie2.collide (sueloI);
    zombie2.velocityY = zombie.velocityY + 0.8;
    zombie.velocityY = zombie.velocityY + 0.8;

   drawSprites ();
   text ("balas: " + contador, 120, 50 );


}

 

function reset (){
  state = 1;
  perdiste.visible = false;
  chica.x = 100;
  chica.changeAnimation ("corriendo", chicaI);
  zombie.changeAnimation ("running1", zombieC);
  zombie2.changeAnimation  ("running2", zombieC2);
contador = 8
}

function bullet1(){
  if (frameCount % 50 === 0 ){
  zombie2.changeAnimation ("shoot2", zombieT2);
  zombie2.scale = 0.5;
  bala = createSprite (zombie2.x-120, zombie2.y-35);
  bala.addImage (balaI);
  bala.velocityX = -8;
  bala.scale = 0.05;
  balaG.add(bala);
}
}

function bullet2(){
  if (frameCount % 100 === 0 ){
    zombie.changeAnimation ("shoot1", zombieT)
    zombie.scale = 0.65;
  bala2 = createSprite (zombie.x-120, zombie.y-35);
  bala2.addImage (balaI2);
  bala2.velocityX = -8;
  bala2.velocityY = 1;
  bala2.scale = 0.05
  balaG2.add(bala2);
}
}

function balaN ()
{
  if (frameCount % 5 === 0)
  {
      contador = contador - 1;
      plas = createSprite (chica.x+60, chica.y-50)
      plas.addImage (plasI);
      plas.velocityX = 10;
      plas.scale = 0.03;
      plasG.add (plas);
  }
}







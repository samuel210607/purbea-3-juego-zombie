var chica, chicaI, chicaM, chicaR, chicaT, chicaN, chicaA;
var zombie, zombieI, zombieT, zombieT2; 
var fondo, fondoI, perdiste, perdisteI;
var cura, curaI;
var state = 1;
var sueloI;
var plasma, plasmaI; 
var acido, mocoI;
var acido2, mocoG2;
  var mocoG, plasmaG;
  var b;
   var contador = 5;
  var  vidaZ = 3
   var r;
var estadoT;
var tz;



function preload(){
  chicaI = loadAnimation ("chica corriendo .gif");
  chicaM = loadAnimation ("chicamuerta.jpg");
  chicaR = loadAnimation ("chicaRB.png", "chicaRB2.png", "chicaRB3.png")
  chicaT = loadAnimation ("chicaTB.png");
  chicaN = loadAnimation ("chicaSB.png");
  chicaA = loadAnimation ("chicaA.png")

  zombieI = loadAnimation ("Z1.png", "Z2b.png");
  zombieT = loadAnimation ("Z3 .png", "Z1.png", "Z2b.png", "Z1.png","Z2b.png",
   "Z1.png", "Z2b.png", "Z1.png", "Z2b.png", "Z1.png", "Z2b.png", "Z1.png", "Z2b.png",
    "Z1.png", "Z2b.png", "Z1.png", "Z2b.png","Z3 .png" );

  fondoI = loadImage ("fondo2.jpg");

  perdisteI = loadAnimation ("perdiste.gif");

plasmaI = loadImage ("AIP.png");
curaI = loadImage ("cura.png");
mocoI = loadImage ("moco.PNG")


} 
function setup() {
  createCanvas (935, 400);
  fondo = createSprite (467, 200);
  fondo.addImage (fondoI);
  fondo.scale = 2.2;

  perdiste = createSprite ( 467, 200);

  chica = createSprite (width-800, height-40);
  chica.addAnimation ("normal", chicaN);
  chica.addAnimation ("corriendo", chicaI);
  chica.addAnimation ("muerta", chicaM);
  chica.addAnimation ("reversa", chicaR);
  chica.addAnimation ("tirando", chicaT);
chica.addAnimation ("agachada", chicaA)
  chica.scale = 0.5;

  zombie = createSprite (850, 310)
  zombie.addAnimation ("corriendo", zombieI);
  zombie.addAnimation ("tirando", zombieT);

  zombie.scale = 0.3;
 zombie.setCollider ("rectangle", 0,90, 300,400);


  sueloI = createSprite (467, 400, 935, 5);
  sueloI.visible = false; 

  cura = createSprite (900, 360);
  cura.addImage (curaI);
  cura.scale =0.05;


  mocoG = createGroup ();
  plasmaG = createGroup ();

  zombie.debug = true ;

  // crear un objeto simple 
 //tz = createSprite  (775, 50, 220, 5);


}



function draw() {
          background (0);

          b = createEdgeSprites ();
      chica.bounce(b);

          if (state === 1)
          {
           if (mousePressedOver (perdiste) && state === 1){

          }
              perdiste.visible = false;
            if (keyDown ("RIGHT_ARROW"))
            {
                chica.changeAnimation ("corriendo", chicaI);
                chica.x = chica.x + 3;  
                chica.scale = 0.85;

            }

          else 
           {
            chica.changeAnimation ("normal", chicaN);
            chica.scale = 0.6;
           }

          if(keyDown ("LEFT_ARROW"))
          {
            chica.changeAnimation ("reversa", chicaR);
            chica.x = chica.x - 3;  
            chica.scale = 0.6;
          }

            if(keyDown ("DOWN_ARROW"))
            {
              chica.changeAnimation ("agachada", chicaA);
              chica.scale = 0.7;
            }
              
          if (keyDown("space") && chica.y > 330)
            {
              chica.velocityY = -20;
            }

  chica.velocityY = chica.velocityY + 0.8;
          // chica.collide (sueloI);
            
          if (frameCount % 10 === 0)
          {
            estadoT = 1
          }
          else {
            estadoT === 0;
          }
          if (estadoT === 0){
            r = "recargando arma"
          }


          if (estadoT === 1)
          {
            r = "arma cargada";
            textSize (20);
            stroke ("black");
            text ("balas: " + contador + ", " + r, 120, 50 );
          
            if (keyIsDown(UP_ARROW) && contador >= 1 )
            {
              
              chica.changeAnimation ("tirando", chicaT);
              chica.scale = 0.36;
              gun ();   
              estadoT = 0;
            }

          }
    

        


      if (zombie.x <= 700)
      {
        zombie.velocityX = 2;
      } 
        if (zombie.x >= 850)
        {
          zombie.velocityX = -2;
        }






zombie.setCollider ("rectangle", 0, 0, 900, 520);
      if (contador === 4 && estadoT === 0)
      {
        zombie.velocityY = -15;
      }

      if (contador === 2 && estadoT === 0)
      {
        zombie.velocityY  = -15;
      }




      
      if ((contador === 3  ||contador === 1 ||  contador === 0)  && plasmaG.collide (zombie))
      {
        vidaZ = vidaZ -1;
        plasmaG.destroyEach ();    
      }


      zombie.velocityY = zombie.velocityY + 0.5;

      sustancia ();

      if (vidaZ === 0)
      {
        zombie.lifetime = 1;
      }


            if (mocoG.isTouching (chica) || mocoG.isTouching (chica) && chica.y <400)
            {
               state = 0;
            }
            if (zombie.isTouching (chica))
            {
              state = 0;
            }
          }

          if (state === 0)
          {
            chica.y = 360;
            perdiste.addAnimation ("perdi", perdisteI);
            perdiste.scale = 1.3;
            perdiste.visible = true;

            fondo.visible = false;
            mocoG.destroyEach ();
            plasmaG.destroyEach ();

            perdiste.depth = chica.depth;
            chica.depth = chica.depth+1;
            perdiste.depth = zombie.depth;
            zombie.depth = zombie.depth + 1;
            zombie.velocityX = 0;
            zombie.x = zombie.x;
            chica.changeAnimation ("muerta", chicaM);
            chica.scale =1;

          }

        if (mousePressedOver (perdiste))
        {
          reset();
        }
            chica.collide (sueloI);
            zombie.collide (sueloI);

        drawSprites ();
        textSize (20);
        stroke ("black");
        text ("balas: " + contador + ", " + r, 120, 50 );
      


}

 

function reset (){
state = 1;
  perdiste.visible = false;
  fondo.visible = true;
  chica.x = 135;
  zombie.x = 850;
  chica.changeAnimation ("corriendo", chicaI);
  zombie.changeAnimation ("corriendo", zombieI);
  contador = 5;
}

function sustancia()
{
      if (frameCount % 70 === 0 )
      {
        zombie.changeAnimation ("tirando", zombieT);
        console.log ("zombie");
        acido = createSprite (zombie.x, zombie.y-40);
        acido.addImage (mocoI);
        acido.velocityX = -15;
        acido.scale = 0.05
        mocoG.add(acido);

      }
}


function gun ()
{

      contador = contador - 1;
      plasma = createSprite (chica.x+60, chica.y-50)
      plasma.addImage (plasmaI);
      plasma.velocityX = 20;
      plasma.scale = 0.03;
      console.log (plasma.x);
      plasmaG.add (plasma);
 

}


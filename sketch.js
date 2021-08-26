
var ima1,ima2,ima3,ima4,ima5,ima6,ima7,ima8,ima9,ima10,ima11,ima12,ima13;
var ima14, ima15, ina16, ima17;
var historia,hist,estado,playI;
estado= 1;
hist=1;
var estadoPadre ;
estadoPadre = 1;

var chica, chicaI, chicaM;
var zombie, zombieI, zombieG; 
var arbol, arbolI, rama, ramaI;
var flecha, flechaI; 
var fondo, fondoI, perdiste, perdisteI;
var state;

var sueloI;
var ramaG, flechaG, arbolG; 
var cuadrosF, cuadrosA, cuadrosR;
var play13;
  
function preload()
{
    ima1 = loadAnimation ("niña1.JPG");
    ima2 = loadAnimation ("asteroide1.PNG");
    ima3 = loadAnimation ("asteroide2.PNG");
    ima4 = loadAnimation ("asteroide3.PNG");
    ima5 = loadAnimation ("humanos1.PNG");
    ima6 = loadAnimation ("genetica.jpeg");
    ima7 = loadAnimation ("humano2.jpeg");
    ima8 = loadAnimation ("humanos3.JPG");
    ima9 = loadAnimation ("niña2.JPG");
    ima10 = loadAnimation ("cura1.PNG");
    ima11 = loadAnimation ("niña3.JPG");
    ima12 = loadAnimation ("Zombie1.PNG");
    ima13 = loadAnimation ("instrucciones1.PNG");


    //historia 2
    ima14 = loadAnimation ("chicagane1.PNG");
    ima15 = loadAnimation ("zombieP2.PNG");
    ima16 = loadAnimation ("zombie3.PNG");
    ima17 = loadAnimation ("instrucciones2.PNG");


    playI = loadImage ("play.jpg");


    chicaI = loadAnimation ("chica corriendo .gif");
    chicaM = loadImage ("chicaMuestaBuena.jpg");
    zombieI = loadAnimation ("zombie bueno corriendo.gif");
    arbolI = loadImage ("arbol.png");
    ramaI = loadImage ("rama.png");
    flechaI =loadImage ("flecha verde .png");
    fondoI = loadImage ("fondo funciona.png");
    zombieG = loadImage ("zombieGane.jpg");
    perdisteI = loadAnimation ("perdiste.gif");
}

function setup()
{
        createCanvas(windowWidth, windowHeight);
        historia=createSprite(width/2,height/2);
        historia.addAnimation("imag1",ima1);
        historia.addAnimation("imag2",ima2);
        historia.addAnimation("imag3",ima3);
        historia.addAnimation("imag4",ima4);
        historia.addAnimation("imag5",ima5);
        historia.addAnimation("imag6",ima6);
        historia.addAnimation("imag7",ima7);
        historia.addAnimation("imag8",ima8);
        historia.addAnimation("imag9",ima9);
        historia.addAnimation("imag10",ima10);
        historia.addAnimation("imag11",ima11);
        historia.addAnimation("imag12",ima12);
        historia.addAnimation("imag12",ima12);
        historia.addAnimation("imag13",ima13);

        historia.addAnimation("imag14",ima14);
        historia.addAnimation("imag15",ima15);
        historia.addAnimation("imag16",ima16);
        historia.addAnimation("imag17",ima17);

        historia.scale=0.7;    
        
        
        fondo = createSprite (0, 0);
        fondo.addImage (fondoI);
        fondo.scale = 3.1;


        chica = createSprite (450, height-160);
        chica.addAnimation ("corriendo", chicaI);
        chica.addAnimation ("muerta", chicaM);
        chica.scale = 0.5;

        zombie = createSprite (70, height-120);
        zombie.addAnimation ("corriendo", zombieI);
        zombie.addAnimation ("gane", zombieG)
        zombie.scale = 0.4;
        zombie.setCollider ("rectangle", 0,90, 300,400);

        ramaG = createGroup ();
        flechaG = createGroup ();
        arbolG = createGroup ();

        sueloI = createSprite (width/2, height-0, width, 5);
        sueloI.visible = false; 
}

function draw()
{
    background(0);

    if (estadoPadre === 1)
    {
      fondo.visible = false;
      //perdiste.visible = false;
      chica.visible = false;
      zombie.visible = false;
      history();

    }
        if (state === 1)
        {
              fondo.visible = true;
            //  perdiste.visible = true;
              chica.visible = true;
              zombie.visible = true;
              fondo.velocityX = -7
            //  perdiste.velocityX = -10;

              if (fondo.x < 0)
            {
             fondo.x = fondo.width/2;
            }
          
            if (keyDown("space") && chica.y >= 360)
              {
                 chica.velocityY = -10;
              }
                 chica.velocityY = chica.velocityY + 0.8;
                  // chica.collide (sueloI);    
                  ramas ();
                  arboles ();
                  flechas ();

              if (ramaG.isTouching (chica))
              {
                  chica.changeAnimation ("muerta", chicaM);
                  chica.x = chica.x - 2;
              }
              else
              {
                 chica.changeAnimation ("corriendo", chicaI);
              }
              if (chica.isTouching (flechaG))
              {
                    chica.x = chica.x + 8; 
              }
        
              if (arbolG.isTouching(chica))
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
              perdiste = createSprite ( width/2, height/2);
                  perdiste.addAnimation ("perdi", perdisteI);
                  perdiste.scale = 1.6;
                  perdiste.visible = true;
                  fondo.visible = false;
                  perdiste.depth = chica.depth;
                  chica.depth = chica.depth+1;
                  perdiste.depth = zombie.depth;
                  zombie.depth = zombie.depth + 1;
                  chica.changeAnimation ("muerta", chicaM);
                  zombie.changeAnimation ("gane", zombieG);
                  ramaG.destroyEach();
                  arbolG.destroyEach();
                  flechaG.destroyEach ();

                  if (mousePressedOver (perdiste))
                  {
                      reset();
                  }
              
            }
            if ( chica.x >= 800 && estadoPadre === 2)
            {
              state = 2;
              chica.visible = false ;
              fondo.visible = false;
              zombie.visible = false;
              historia.visible = false;
                    estado = 14; 
                historia2 ();

                  
            }           

chica.collide (sueloI);
console.log  (chica.x);
drawSprites(); 
}

function reset ()
{
     state = 1;
    perdiste.visible = false;
    fondo.visible = true;
    chica.changeAnimation ("corriendo", chicaI);
    zombie.changeAnimation ("corriendo", zombieI);
    puntaje = 0;

}
  
  function ramas()
  {
   // cuadrosR = Math.round(random(0, 1000));
    if (frameCount % 10000 === 0)
    {
          rama = createSprite (width, height-30);
          rama.addImage(ramaI)
          rama.scale = 0.2; 
          rama.velocityX = -7; 
          rama.lifetime = 1000;
          
          chica.depth = rama.depth;
          rama.depth = rama.depth + 1;
          
          ramaG.add (rama);
          rama.setCollider ("rectangle",-13,0, 400, 150);
        
    }
   
  }
  
  function arboles ()
  {
  //  cuadrosA = Math.round(random(0, 1000));
         if (frameCount % 10000 === 0 )
         {
              arbol = createSprite (width, height-60);
              arbol.addImage (arbolI);
              arbol.scale = 0.2;
            
              arbol.velocityX = -7; 
              arbol.lifetime = 1000;
          
              arbolG.add (arbol);
              arbol.setCollider ("circle", 0,0,200);
          }
  }
  
  function flechas ()
  {
   
      if (frameCount % 10  === 0)
      {
            flecha = createSprite (width, height-30);
            flecha.addImage (flechaI);
            flecha.scale = 0.08;
          
            flecha.velocityX = -7;
            
        
            flecha.lifetime = 1000;
            
          chica.depth = flecha.depth;
            flecha.depth = flecha.depth + 1;
            flechaG.add (flecha);
          flecha.setCollider ("circle",0,0,400);
        
      }
  }

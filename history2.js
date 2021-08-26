function historia2 ()
{
    

    if (estado === 14)
    {
        var play14 = createSprite (430,height-20);
        play14.addImage(playI);
        play14.scale=0.05;

                if ( mousePressedOver(play14))
                { 
                historia.changeAnimation("imag14",ima14);
                historia.scale =0.8;
                historia.visible = true;

                estado=15;

            }
        play14.lifetime=5;
        console.log (estado);
  }
    if (estado === 15)
    {
        var play15 = createSprite (460,height-20);
        play15.addImage(playI);
        play15.scale=0.05;

        if ( mousePressedOver(play15))
        { 
            historia.changeAnimation("imag15",ima15);
            historia.scale =0.5;
            estado=16;
        }
        play15.lifetime=5;

  }

      if (estado === 16)
      {
        var play16 = createSprite (490,height-20);
        play16.addImage(playI);
        play16.scale=0.05;
      
            if ( mousePressedOver(play16))
            { 
                historia.changeAnimation("imag16",ima16);
                historia.scale =0.5;
                estado=17;
            }
        play16.lifetime=5;
      }

      if (estado === 17)
      {
        var play17 = createSprite (520,height-20);
        play17.addImage(playI);
        play17.scale=0.05;
        
            if ( mousePressedOver(play17))
            { 
                historia.changeAnimation("imag17",ima17);
                historia.scale =0.5;
    
                estado=18;
            }
        play17.lifetime=5;
      }

      
}
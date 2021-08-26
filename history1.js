function history ()
{

            if (estado === 1)
            {
                var play1 = createSprite (10,height-20);
                play1.addImage(playI);
                play1.scale=0.05;   
                    if ( mousePressedOver(play1))
                    {            
                        historia.changeAnimation("imag2",ima2);
                        
                        historia.scale =0.5;
                        estado = 2;
                    }
                play1.lifetime=5;
            } 
            if (estado === 2)
            {
                var play2 = createSprite (40,height-20);
                play2.addImage(playI);
                play2.scale=0.05;       
                if ( mousePressedOver(play2))
                { 
                        historia.changeAnimation("imag3",ima3);
                        historia.scale =0.5;
        
                        estado=3;
                }
                play2.lifetime=5;
            }
           if (estado === 3)
            {
              var play3 = createSprite (70,height-20);
              play3.addImage(playI);
              play3.scale=0.05;   
                if ( mousePressedOver(play3))
                { 
                      historia.changeAnimation("imag4",ima4);
                      historia.scale =0.5;
        
                      estado=4;
                }
                play3.lifetime=5;
            }
            if (estado === 4)
            {
              var play4 = createSprite (100,height-20);
              play4.addImage(playI);
              play4.scale=0.05;
            
                if ( mousePressedOver(play4))
                { 
                      historia.changeAnimation("imag5",ima5);
                      historia.scale =0.5;
        
                      estado=5;
                }
              play4.lifetime=5;
            }
            if (estado === 5)
            {
              var play5 = createSprite (130,height-20);
              play5.addImage(playI);
              play5.scale=0.05;
            
                if ( mousePressedOver(play5))
                { 
                      historia.changeAnimation("imag6",ima6);
                      historia.scale =0.2;
        
                      estado=6;
                }
              play5.lifetime=5;
            }
            if (estado === 6)
            {
              var play6 = createSprite (160,height-20);
              play6.addImage(playI);
              play6.scale=0.05;
            
                if ( mousePressedOver(play6))
                { 
                      historia.changeAnimation("imag7",ima7);
                      historia.scale =0.2;
        
                      estado=7;
                }
                play6.lifetime=5;
            }
            if (estado === 7)
            {
              var play7 = createSprite (190,height-20);
              play7.addImage(playI);
              play7.scale=0.05;
            
                if ( mousePressedOver(play7))
                { 
                      historia.changeAnimation("imag8",ima8);
                      historia.scale =1.3;
        
                      estado=8;
                }
                play7.lifetime=5;
            }
            if (estado === 8)
            {
              var play8 = createSprite (220,height-20);
              play8.addImage(playI);
              play8.scale=0.05;
            
                if ( mousePressedOver(play8))
                { 
                      historia.changeAnimation("imag9",ima9);
                      historia.scale =0.7;
        
                      estado=9;
                }
                play8.lifetime=5;
            }
            if (estado === 9)
            {
              var play9 = createSprite (250,height-20);
              play9.addImage(playI);
              play9.scale=0.05;
            
                if ( mousePressedOver(play9))
                { 
                      historia.changeAnimation("imag10",ima10);
                      historia.scale =0.6;
        
                      estado=10;
                }
                play9.lifetime=5;
            }
            if (estado === 10)
            {
              var play10 = createSprite (280,height-20);
              play10.addImage(playI);
              play10.scale=0.05;
            
                if ( mousePressedOver(play10))
                { 
                      historia.changeAnimation("imag11",ima11);
                      historia.scale =0.6;
        
                      estado=11;
                }
                play10.lifetime=5;
            }
            if (estado === 11)
            {
              var play11 = createSprite (310,height-20);
              play11.addImage(playI);
              play11.scale=0.05;
            
                if ( mousePressedOver(play11))
                { 
                      historia.changeAnimation("imag12",ima12);
                      historia.scale =0.3;
        
                      estado=12;
                }
                play11.lifetime=5;
            }
            if (estado === 12)
            {
              var play12 = createSprite (340,height-20);
              play12.addImage(playI);
              play12.scale=0.05;
            
                if ( mousePressedOver(play12))
                { 
                      historia.changeAnimation("imag13",ima13);
                      historia.scale =0.5;
        
                      estado=13;
                }
                play12.lifetime=5;
              
            }
            if (estado === 13)
              {
              var play13 = createSprite (370,height-20);
              play13.addImage(playI);
              play13.scale=0.05;
              if ( mousePressedOver(play13))
              { 
                state = 1;
                estadoPadre = 2;
      
              }
              play13.lifetime=5;


            }


          
         
}

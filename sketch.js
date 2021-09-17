var tela= 1;
var largura= 200;
var altura= 50;
var xMenu= 200;
var yMenu1= 150;
var yMenu2= 200;
var yMenu3= 250;
var u= 15;
var larguralk=100;
var alturalk=40;
var yMenu4=260;
var xlike=85;
var xlike1=190;
var xlike2=310;
var xlike3=450;
var ylike=300;
var xlado=450
var xVolta=450
var xb = 100; 
var yb1 = 150; 
var yb2 = 250; 
var yVoltar = 340; 
var xVoltar = 65; 
var larguraB = 200; 
var larguraVoltar = 100;
var alturaVoltar = 40;
var alturaB = 60; 
var suavizaB = 12; 

// local onde sera armazenados as imagens 
let img;
function preload() {
  img =loadImage('inicio.jpeg');
  im=loadImage('creditos.jpeg');
  op=loadImage("instruçoes.jpeg");
  mm=loadImage("questao 1.jpeg");
  nn=loadImage("acertou.jpeg");
  ot=loadImage("errou.jpeg");
  fi=loadImage("q2.jpeg")
  pecon=loadImage("q3.jpeg")
  perid=loadImage("q4.jpeg")
  mom=loadImage('q5.jpeg')
  food=loadImage("q6.jpeg")
  peran=loadImage('q7.jpeg')
  ann=loadImage("q8.jpeg")
  pehave=loadImage("q9.jpeg")
  final=loadImage("final.jpeg") 

}

function setup() {
  createCanvas(600,400);
}

function draw() {
  textStyle(ITALIC);
  // menu do jogo
  if(tela==1){
    background(180,190,255,180);
    image(img, 300,200,600,400);
    imageMode(CENTER);
    // menu com 3 opções 
    //iniciar 
    textAlign(CENTER);
    textSize(20);
    
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu1 && mouseY< yMenu1 + altura){
    fill(255,20,147);
    rect(xMenu, yMenu1,largura,altura,u);
      if (mouseIsPressed) {
        tela=2
      }
    
    }
   
    fill(250);
    text("Iniciar", 300,180);
    
    //informações
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu2 && mouseY< yMenu2 + altura){
    fill(255,20,147);
    rect(xMenu, yMenu2,largura,altura,u);
      if (mouseIsPressed) {
        tela=3
      }
    }
    
    fill(250);
    text("Informações", 300,230);
    
    
    // créditos
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu3 && mouseY< yMenu3 + altura){
    fill(255,20,147);
    rect(xMenu, yMenu3,largura,altura,u);
      if (mouseIsPressed) {
        tela=4
    }
    }
    fill(250);
    text("Créditos", 300,280);
    
    
  }
  // jogo code
     else if( tela==2)
    {background(180,190,255,180);
     image(mm,300,200,600,400);
     imageMode(CENTER);
     
  
if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
        
  }
    }
   
    textSize(18);
    fill(240);
    text("Voltar",xVolta+50,yVoltar+25)

     if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=5
    
  }
    }
  textSize(18);
   fill(0);
   text("Mercúrio", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=7
       }
     }
     textSize(18);
   fill(0);
   text("Terra", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=7
        }
     }
     textSize(18);
   fill(0);
   text("Venus", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=7
        }
     }
      textSize(18);
   fill(0);
   text("Marte", xlike3+50, ylike+0)
 }
   
  
    // informação code
   if( tela==3){background(180,190,255,180);
                image(op,300,200,600,400);
                imageMode(CENTER);
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    
    }
   
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25);

   
  
                    }
      //créditos code
   else if(tela==4){
   background(250,170);
     image(im, 300,200,600,400);
    imageMode(CENTER);
      if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25)

   }
   //telaAcertou5
  if(tela==5){
    background(140,290,280,290)
    image(nn,300,200,600,400);
    imageMode(CENTER);
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela=8; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVoltar+50,yVoltar+25)
  }
  //telaErrou
if(tela==7){
  background(140,270,300,170)
  image(ot,300,200,600,400)
  imageMode(CENTER)
  
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =2; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVoltar+50,yVoltar+25)
}
  if(tela==8){
    background(140);
    image(fi,300,200,600,400);
    imageMode(CENTER);
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=9
    
  }
    }
  textSize(18);
   fill(0);
   text("9", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=9
       }
     }
     textSize(18);
   fill(0);
   text("4", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=10
        }
     }
     textSize(18);
   fill(0);
   text("6", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=10
        }
     }
      textSize(18);
   fill(0);
   text("5", xlike3+50, ylike+0)
 }
  
    
    
//tela9para voltar
  if(tela==9){
    background(190,230,240,190)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =8; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVoltar+50,yVoltar+25)
  }
  //tela10
  if(tela==10){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =12; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVoltar+50,yVoltar+25)
  }

  //tela12perguntas3
  if(tela==12){
    background(140)
    image(pecon,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=14
    
  }
    }
  textSize(18);
   fill(0);
   text("galinha", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=14
       }
     }
     textSize(18);
   fill(0);
   text("cobra", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=14
        }
     }
     textSize(18);
   fill(0);
   text("ornitorrinco", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=13
        }
     }
      textSize(18);
   fill(0);
   text("avestruz", xlike3+50, ylike+0)
 }
  if(tela==13){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =16; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVoltar+50,yVoltar+25)
  }
  if(tela==14){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =12; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVolta+50,yVoltar+25)
  }

  //pwegunta
  if(tela==16){
    background(140)
    image(perid,300,200,600,400)
    imageMode(CENTER)
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=18
    
  }
    }
  textSize(18);
   fill(0);
   text("Coreia", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=17
       }
     }
     textSize(18);
   fill(0);
   text("Peru", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=18
        }
     }
     textSize(18);
   fill(0);
   text("Cuba", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=18
        }
     }
      textSize(18);
   fill(0);
   text("Brasil", xlike3+50, ylike+0)
  }
  if(tela==17){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
     if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =20; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVolta+50,yVoltar+25)
    
  }
  if(tela==18){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =16; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVolta+50,yVoltar+25)
    
  }

  if(tela==20){
    background(140)
    image(mom,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=22
    
  }
    }
  textSize(18);
   fill(0);
   text("Brasil", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=21
       }
     }
     textSize(18);
   fill(0);
   text("Itália", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=22
        }
     }
     textSize(18);
   fill(0);
   text("India", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=22
        }
     }
      textSize(18);
   fill(0);
   text("Indonesia", xlike3+50, ylike+0)
  }
  if(tela==21){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =24; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVolta+50,yVoltar+25)
  }
  if(tela==22){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =20; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVolta+50,yVoltar+25)
  }
  
  //tela24
  if(tela==24){
    background(140)
    image(food,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=26
    
  }
    }
  textSize(18);
   fill(0);
   text("Getulio", xlike+50, ylike+0)
    text("Vargas",xlike+60,ylike+20)
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=26
       }
     }
     textSize(18);
   fill(0);
   text("Janio", xlike1+50, ylike+0)
  text("Quadros",xlike1+60,ylike+20)
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=26
        }
     }
     textSize(18);
   fill(0);
   text("Jacinto", xlike2+50, ylike+0)
  text("dos Santos",xlike2+60,ylike+20)
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=25
        }
     }
      textSize(18);
   fill(0);
   text("João", xlike3+50, ylike+0)
    text("Goulart",xlike3+60,ylike+20)
  }
  if(tela==25){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =28; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVoltar+50,yVoltar+25)
  }
    if(tela==26){
      background(140)
      image(ot,300,200,600,400)
      imageMode(CENTER)
      
      if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =24; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVoltar+50,yVoltar+25)
    }
  
  if(tela==28){
    background(140)
    image(peran,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=30
    
  }
    }
  textSize(18);
   fill(0);
   text("Dom Quixote", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=29
       }
     }
     textSize(18);
   fill(0);
   text("O pequeno", xlike1+50, ylike+0)
    text("príncipe",xlike1+60,ylike+20) 
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=29
        }
     }
     textSize(18);
   fill(0);
   text("O hobbit", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=29
        }
     }
      textSize(18);
   fill(0);
   text("Moby Dick", xlike3+50, ylike+0)
    
  }
  if(tela==29){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =28; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVolta+50,yVoltar+25)  
  }
  if(tela==30){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =32; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVolta+50,yVoltar+25)
  }
  if(tela==31){
    background(140)
    image(ann,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=33
    
  }
    }
  textSize(18);
   fill(0);
   text("364", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=33
       }
     }
     textSize(18);
   fill(0);
   text("366", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=33
        }
     }
     textSize(18);
   fill(0);
   text("364,6", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=32
        }
     }
      textSize(18);
   fill(0);
   text("Vaticano", xlike3+50, ylike+0)
    text("Russia",xlike3+60,ylike+20)
    
  }
  if(tela==32){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =35; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVolta+50,yVoltar+25)  
  }
if(tela==33){
  background(140)
  image(ot,300,200,600,400)
  imageMode(CENTER)
  
  if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =31; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Sport",xVolta+50,yVoltar+25)
}
  
  if(tela==35){
    background(140)
    image(pehave,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=36
    
  }
    }
  textSize(18);
   fill(0);
   text("Vaticano", xlike+50, ylike+0)
    text("Russia",xlike+60,ylike+20) 
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=37
       }
     }
     textSize(18);
   fill(0);
   text("Cuba", xlike1+50, ylike+0)
     text("Portugal",xlike1+60,ylike+20)
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=37
        }
     }
     textSize(18);
   fill(0);
   text("Cuba", xlike2+50, ylike+0)
    text("Russia",xlike2+60,ylike+20) 
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=37
        }
     }
      textSize(18);
   fill(0);
   text("Vaticano", xlike3+50, ylike+0)
    text("Brasil", xlike3+60,ylike+20)
  }
  if(tela==36){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =41; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Next",xVoltar+50,yVoltar+25)
  }
    if(tela==37){
      background(140)
      image(ot,300,200,600,400)
      imageMode(CENTER)
      
      if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =35; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVoltar+50,yVoltar+25)
      
    }

  if(tela==40){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    
     if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =38; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Back",xVoltar+50,yVoltar+25)
  }
  if(tela==41){
    background(140)
    image(final,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Início",xVolta+50,yVoltar+25)
  }
}
class RedBox extends Box{
    constructor(x,y){
        super(x,y,40,60);
   }

    display(){
        fill("red");
        super.display();

    }
  
  }
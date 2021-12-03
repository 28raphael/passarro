class Chao extends baseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
      Matter.Body.setStatic(this.body,true);
    }
  }
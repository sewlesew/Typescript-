

class baseObject{  
      constructor(public width:number=0,public length:number=0){}
    
}
class rectangle extends baseObject{
    constructor(){
        super(5,2);
    }
     calSize():number{
        return this.width*this.length;
    }
}

console.log(new rectangle().calSize());


// //Another way of doing using interface
// interface baseObject{
//     width:number,
//     length:number
// }

// interface rectangle extends baseObject{   
// calSize:()=>number;
// }
// var baseObject:baseObject={
//     width:0,
//     length:0
// }

// var rectangle:rectangle={
//  width:5,
//  length:2,
// calSize:function(){
//     return this.width*this.length;
// }
// }
// console.log(rectangle.calSize());

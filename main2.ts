
class Car{
    acceleration:number=0;
    honk:()=>void;
    accelerate:(speed:number)=>void;

        constructor(public name:string){
              this.honk=function(){
              console.log(this.name+" is saying Tooooooot!!!");
                                };

              this.accelerate=function(speed){
              this.acceleration+=speed;
                       } 
            }    
} 
var car=new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);

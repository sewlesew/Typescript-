
class Person{
    private _firstName:string="";
    get firstName():string{
       return this._firstName;
    }
    set firstName(value: string){
      this._firstName=value.toUpperCase();
    }
}
var pp=new Person()
pp.firstName="Asaad";
console.log(pp.firstName);
var a = new Promise();
class Foo{
    constructor(){
        this.name = "hp";
    }
    somemethod(){
        console.log(this.name);        
    }
    arrow(method){
        return (...num)=>{
            method.apply(this,num);
        }
    }
}
let foo = new Foo();
class car{
    static type="mini"
    carname="TATA"
   constructor(brand){
    this.carname=brand
   }
   present(){
    return "name="+this.carname
   }
}
class model extends car{
    constructor(brand,model){
        super(brand)
        this.model=model
    }
    show(){
        return this.present()+ this.model
    }
}
let car1=new model("abc","xyz")
console.log(car1.show(),car1.carname,car1.type)
console.log(car.type)
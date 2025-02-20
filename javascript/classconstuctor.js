// class constuctor


class pen {
    constructor(brand,color,price,model){
        this.brand=brand;
        this.color=color;
        this.price=price;
        this.model=model;

    }
    output (){console.log(`I need ${this.brand} pen brand\nI need  ${this.color} color\nThe minimum of amount ${this.price} rupees\nI need ${this.model} model`)}
}

const finaloutput = new pen("hero","silver",25,"gel");
finaloutput.output ();
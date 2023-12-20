class Ninja {
    constructor(name, health=90, speed=3, strength=3){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
    }
    sayName(){
        console.log(`${this.name}`);
        return this
    }
    showStats(){
        console.log(`${this.name} ${this.strength} ${this.speed} ${this.health}`);
        return this

    }
    drinkSake(){
        this.health += 10
        console.log(`${this.health}`);
        return this

    }
}
const ninja =new Ninja("Michael");
ninja.showStats().drinkSake().sayName()



class Sensei extends Ninja{
    constructor(  name, health,  speed,  strength, wisdom=10){
        super(name, health=200, speed=10, strength=10)
        this.wisdom=wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

splinter = new Sensei("Splinter")
splinter.speakWisdom()

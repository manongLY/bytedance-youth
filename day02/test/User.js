exports.module = class User{
    constructor(name){
        this.name = name
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
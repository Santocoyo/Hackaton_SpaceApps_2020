export default class Unit{
    constructor(name,id,techids, resneed, resprod,image,max,expendable){
        this.name = name;
        this.id=id;
        this.techneed= techids;
        this.resneed = resneed;
        this.resprod = resprod;
        this.image = image;
        this.max = max;
        this.expendable = expendable;
    }
}
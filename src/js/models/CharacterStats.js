
export default class CharacterStats{
    constructor(){
        this.resources = [[1,0.1],[2,0.1],[3,0.1],[4,0.1],[5,0.1]];
        this.units = [
            [ 1, 1 ],
            [ 2, 0 ],
            [ 3, 0 ],
            [ 4, 0 ],
            [ 5, 1 ],
            [ 6, 0 ],
            [ 7, 0 ],
            [ 8, 0 ],
            [ 9, 0 ],
            [ 10, 0 ],
            [ 11, 0 ],
            [ 12, 0 ],
            [ 13, 0 ],
            [ 14, 0 ],
            [ 15, 0 ],
            [ 16, 0 ],
            [ 17, 0 ],
            [ 18, 0 ],
            [ 19, 0 ],
            [ 20, 0 ],
            [ 21, 0 ],
            [ 22, 0 ],
            [ 23, 0 ],
            [ 24, 0 ],
            [ 25, 0 ],
            [ 26, 0 ],
            [ 27, 0 ]
        ];
        this.techs = [0];
        this.missionscomp =[];
    }
    
    Addtech(techid){
        this.techs.push(techid);
    }
    Addunit(unitid,qty){
        if(this.units.some(element => element[0]==unitid))
        {   
           var index = this.units.findIndex(element => element[0]==unitid); 
           this.units[index][1] += qty;
        }
        else{
            this.units.push([unitid,qty]);
        }
        
    }
    Addres(resid,qty){
        if(this.resources.some(element => element[0]==resid))
        {    
            var index = this.resources.findIndex(element => element[0]==resid); 
            this.resources[index][1] += qty; 
        }
        else{
            this.resources.push([resid,qty]);
        }
    }
    getresqty(resid){
        if(this.resources.some(el => el[0]==resid)){
            var index = this.resources.findIndex(element => element[0]==resid)
            return Math.round(this.resources[index][1]*100)/100;
        } else{
            return 0;
        }
        
    }
    getunitqty(unitid){
        if(this.units.some(el => el[0]==unitid)){
            var index = this.units.findIndex(element => element[0]==unitid);
            return this.units[index][1];
        } else{
            return 0;
        }
        
    }
}
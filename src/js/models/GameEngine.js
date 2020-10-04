import dataBase from "../data/dataBase";
import CharacterStats from "./CharacterStats.js";
import Resorce from "./Resource";
import Unit from "./Unit";
import TechAdvance from './TechAdvance';
import Mission from "./Mission";

export default class GameEngine{
    constructor(){
        this.time=0;
        this.resources = dataBase.resources;
        this.techs = dataBase.technologies;
        this.units = dataBase.units;
        this.missions = dataBase.missions;
    }

    getResInfo(resid){
        return this.resources.find(res => res.id==resid);
    }
    getUnitInfo(unitid){
        return this.units.find(un => un.id==unitid);
    }
    getMissionInfo(misid){
        return this.missions.find(un => un.id==misid);
    }
    getTechInfo(techid){
        return this.techs.find(un => un.id==techid);
    }

    updaterestime(player){
        player.units.forEach(element => {
            this.getUnitInfo(element[0]).resprod.forEach(rp =>{
                player.Addres(rp[0],element[1]*rp[1]);
            });
        });
    }


    getMissionStatus(player,misid){
        var mission = this.getMissionInfo(misid);   
        var gotunit = true;
        for(var i=0;i<mission.unitneed.length;i++){
            gotunit = mission.unitneed[i][1] <= player.units[i][1];
            if(!gotunit){
                break;
            }
        }
       if (player.missionscomp.some(e => e==misid)){
           return 2;
       }
       else if (gotunit && this.checkreqarray(player.techs,mission.techneed)){
           return 1;
       }
       else {
            return 0;
       }
    }

    updateMissionunitsuse(player,misid){
        var mission = this.getMissionInfo(misid);
        for(var i=1;i<=mission.unitneed.length;i++){
            if(this.getUnitInfo(i).expendable){
           player.Addunit(mission.unitneed[i-1][0],-mission.unitneed[i-1][1]);
            }
        }
    }
    updateMissionreward(player,misid){
        var mission = this.getMissionInfo(misid);
        for(var i=0;i<mission.reward.length;i++){
           player.Addres(mission.reward[i][0],mission.reward[i][1]);
        }   
        player.techs.push(mission.treward);
        player.missionscomp.push(misid);
    }

    probfunc(n,d){
        if(d!=0){
            return (1/2)*(2-Math.exp(-n/(d*5)));
        }
        else{
            return 1;
        }
    }
    missionsucprob(player,misid){
        var unitarray = this.getMissionInfo(misid).unitneed;
        var restotal =[[1,0],[2,0],[3,0],[4,0],[5,0]];
        var comparray=[];
        var probmed = 0;
        unitarray.forEach(e =>{
            for(var i=0;i<this.getUnitInfo(e[0]).resneed.length;i++){
                restotal[i][1] += e[1]*this.getUnitInfo(e[0]).resneed[i][1];
             } 
        })
        for(var i=0;i<restotal.length;i++){
            comparray.push([i,this.probfunc(player.resources[i][1],restotal[i][1])])
         }  
         comparray.forEach(e=>{
             probmed+=e[1];
         })
         probmed = probmed/comparray.length;
         return probmed;
    }
    trymission(player,misid){
        if(Math.random()<this.missionsucprob(player,misid)){
            this.updateMissionunitsuse(player,misid);
            this.updateMissionreward(player,misid);
            return true;
        }
        else
        {
            this.updateMissionunitsuse(player,misid);
            return false;
        }
    }
    checkreqarray(g,c){
        var flag=true;
        c.forEach(e=>{
            if(!g.includes(e)){
                flag = false;
            }
        })
        return flag;
    }
    getTechStatus(player,techid){
        var tech = this.getTechInfo(techid); 
        var gotres = true;
        
        for(var i=0;i<tech.resneed.length;i++){
            gotres = tech.resneed[i][1] <= player.resources[i][1];
        }
       if (player.techs.some(e => e==techid)){
           return 2;
       }
       else if (gotres && this.checkreqarray(player.techs,tech.techneed)){
           return 1;
       }
       else if(!gotres){
            return 0;
       }
    }
    updatetechres(player,techid){
        player.Addtech(techid);
        var tech = this.getTechInfo(techid);
        for(var i=0;i<tech.resneed.length;i++){
            player.Addres(tech.resneed[i][0],-tech.resneed[i][1]);
         } 
    }
    updateunitres(player,unitid){
            var unit = this.getUnitInfo(unitid);
            for(var i=0;i<unit.resneed.length;i++){
                player.Addres(unit.resneed[i][0],-unit.resneed[i][1]);

    }
}
    Tryaddunits(player,unitid){
        var index = player.units.findIndex(element => element[0]==unitid)
            if (player.units[index][1] + 1<=this.getUnitInfo(unitid).max){
                this.updateunitres(player,unitid);
                player.Addunit(unitid,1);
                return true;
            } else{
                return false;
            }
        }     
    
    getUnitStatus(player,unitid){
        var unit = this.getUnitInfo(unitid);
        var gotres = true;
        for(var i=0;i<unit.resneed.length;i++){
            gotres = unit.resneed[i][1] <= player.resources[i][1];
            if(!gotres){
                break;
            }
        }
        var maxreach = this.getUnitInfo(unitid).max <= player.getunitqty(unitid);
        if (gotres && !maxreach && this.checkreqarray(player.techs,unit.techneed)){
            return 1;
        }   
        else{
            return 0;
        }
    }

    getMissionUnits(misid){
        var mission = this.getMissionInfo(misid);
        var unitsn = [];
        mission.unitneed.forEach(u =>{
            if(u[1]!=0){
                unitsn.push(u);
            }
        })
        return unitsn;
    }
}
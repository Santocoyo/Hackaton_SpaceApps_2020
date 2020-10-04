import { elements } from "./views/base";
import CharacterStats from "./models/CharacterStats.js";
import GameEngine from "./models/GameEngine";
import dataBase from "./data/dataBase";
import * as resourcesView from "./views/resourcesView";

const Engine = new GameEngine();
var Society = new CharacterStats();

//Inititate on load
window.addEventListener("load", () => {
    update(Society, Engine);
    initMission();
});
//Update data every certain time
setInterval(() => update(Society, Engine), 3000);

//Calling all the controllers
function update(player, engine) {
    engine.updaterestime(player);
    initResource();
    controllerMission();
    initTech();
    initUnit();
}

document.querySelector(".inbu").addEventListener("click", () => {
    document.querySelector(".popup__img").style.visibility = "visible";
    document.querySelector(".popup__field").style.visibility = "visible";
    document.querySelector(".popup__mess").style.visibility = "hidden";
    document.querySelector(".popup__title").textContent = "Instructions"
    document.querySelector(".popup__img").src = "./img/favicon.png";
    document.querySelector(".popup__desc").textContent = "Complete all missions to become an gallactic civilization!, each mission requires certain number of units and specific techologies. Start obtaining units to complete missions or gather resources, you'll need water, energy, materials or anti-matter to build them.Don't forget to obtain new technology advancements with science points"
})

//Resource controller
const initResource = () => {
    const resourcesArr = [
        [1, elements.globalWater],
        [2, elements.globalEnergy],
        [3, elements.globalMaterials],
        [4, elements.globalAntimatter],
        [5, elements.globalScience]
    ];
    resourcesArr.forEach(el => {
        resourcesView.updateResource(el[1], Society.getresqty(el[0]));
    });
}

//Tech controller
const initTech = () => {
    dataBase.technologies.forEach((el, id) => {
        let techid = id + 1
        switch (Engine.getTechStatus(Society, techid)) {
            case 0: document.querySelector("#tech" + techid).classList.add("tech__block");
                document.querySelector("#tech" + techid).classList.remove("tech__unblock");
                document.querySelector("#tech" + techid).classList.remove("tech__completed");
                break;
            case 1: document.querySelector("#tech" + techid).classList.remove("tech__block");
                document.querySelector("#tech" + techid).classList.add("tech__unblock");
                document.querySelector("#tech" + techid).classList.remove("tech__completed");
                break;
            case 2: document.querySelector("#tech" + techid).classList.remove("tech__block");
                document.querySelector("#tech" + techid).classList.remove("tech__unblock");
                document.querySelector("#tech" + techid).classList.add("tech__completed");
                break;
        }
        document.querySelector("#tech" + techid).querySelector(".tech__title").textContent = el.name;

        document.querySelector("#tech" + techid).querySelector(".tech__science").textContent = el.resneed[4][1];

        document.querySelector("#tech" + techid).querySelector(".tech__imagesrc").src = `./img/icons/technologies/${techid}.png`;
    });

}

//Tech button listeners
const techObtainButtons = document.querySelectorAll(".tech__btn_obtain");
techObtainButtons.forEach(el => {
    el.addEventListener("click", () => {
        let currentID = parseInt(el.parentNode.parentNode.parentNode.id.slice(4, 6));
        Engine.updatetechres(Society, currentID);
        update(Society, Engine);
    })
});

const techInfoButtons = document.querySelectorAll(".tech__btn_info");
techInfoButtons.forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector(".popup__img").style.visibility = "visible";
        document.querySelector(".popup__field").style.visibility = "visible";
        document.querySelector(".popup__mess").style.visibility = "hidden";
        let currentID = parseInt(el.parentNode.parentNode.parentNode.id.slice(4,6));
        document.querySelector(".popup__title").textContent = Engine.getTechInfo(currentID).name;
        document.querySelector(".popup__img").src = `./img/icons/technologies/${currentID}.png`
        document.querySelector(".popup__desc").textContent = Engine.getTechInfo(currentID).description;
        update(Society, Engine);
    })
});


//Mission controller
const initMission = () => {
    dataBase.missions.forEach((el, id) => {
        let missid = id+1;
        switch (Engine.getMissionStatus(Society, missid)) {
            case 0: 
                document.querySelector("#miss"+missid).classList.add("mission__block");
                document.querySelector("#miss"+missid).classList.remove("mission__unblock");
                document.querySelector("#miss"+missid).classList.remove("mission__completed");
                break;
            case 1: 
                document.querySelector("#miss"+missid).classList.remove("mission__block");
                document.querySelector("#miss"+missid).classList.add("mission__unblock");
                document.querySelector("#miss"+missid).classList.remove("mission__completed");
                break;
            case 2: 
                document.querySelector("#miss"+missid).classList.remove("mission__block");
                document.querySelector("#miss"+missid).classList.remove("mission__unblock");
                document.querySelector("#miss"+missid).classList.add("mission__completed");
                break;
        };
        document.querySelector("#miss"+missid).querySelector(".mission__title").textContent = el.name;

        Engine.getMissionUnits(missid).forEach((unitel, id) => {
            let missunitid = id+1;
            let markup = `
                <div class="col-auto mission__resource"> <img src="./img/icons/units/${unitel[0]}.png">x<span class="mission__unit_qty">${unitel[1]}</span></div>
            `;
            document.querySelector("#miss"+missid).querySelector(".mission__reqs").insertAdjacentHTML("beforeend", markup);
        })

        // document.querySelector("#miss" + missid).querySelector(".mission__water").textContent = el.resneed[0][1];
        // document.querySelector("#miss" + missid).querySelector(".mission__energy").textContent = el.resneed[1][1];
        // document.querySelector("#miss" + missid).querySelector(".mission__materials").textContent = el.resneed[2][1];
        // document.querySelector("#miss" + missid).querySelector(".mission__antimatter").textContent = el.resneed[3][1];
        // document.querySelector("#miss" + missid).querySelector(".mission__science").textContent = el.resneed[4][1];
    });
};
const controllerMission = () => {
    dataBase.missions.forEach((el, id) => {
        let missid = id+1;
        switch (Engine.getMissionStatus(Society, missid)) {
            case 0: 
                document.querySelector("#miss"+missid).classList.add("mission__block");
                document.querySelector("#miss"+missid).classList.remove("mission__unblock");
                document.querySelector("#miss"+missid).classList.remove("mission__completed");
                break;
            case 1: 
                document.querySelector("#miss"+missid).classList.remove("mission__block");
                document.querySelector("#miss"+missid).classList.add("mission__unblock");
                document.querySelector("#miss"+missid).classList.remove("mission__completed");
                break;
            case 2: 
                document.querySelector("#miss"+missid).classList.remove("mission__block");
                document.querySelector("#miss"+missid).classList.remove("mission__unblock");
                document.querySelector("#miss"+missid).classList.add("mission__completed");
                break;
        };
        document.querySelector("#miss"+missid).querySelector(".mission__title").textContent = el.name;
    });
};

//Add mission buttons listeners
const missionTryButtons = document.querySelectorAll(".mission__btn-try");
missionTryButtons.forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector(".popup__mess").style.visibility = "visible";
        document.querySelector(".popup__img").style.visibility = "visible";
        let currentID = parseInt(el.parentNode.parentNode.parentNode.id.slice(4,6));
        var missionTry = Engine.trymission(Society, currentID);
        document.querySelector(".popup__title").textContent = "a";
        document.querySelector(".popup__img").src = `./img/favicon.png`;
        document.querySelector(".popup__title").textContent = Engine.getMissionInfo(currentID).name;
        document.querySelector(".popup__img").src = `./img/nasaPhotos/${currentID}.jpg`;
        document.querySelector(".popup__desc").textContent = Engine.getMissionInfo(currentID).description;
        switch(missionTry){
            case false: 
                document.querySelector(".popup__mess").textContent = Engine.getMissionInfo(currentID).fail; 
                document.querySelector(".popup__mess").classList.remove("bg-succeess");
                document.querySelector(".popup__mess").classList.add("bg-danger");
                break;
            case true: 
                document.querySelector(".popup__mess").textContent = Engine.getMissionInfo(currentID).end;
                document.querySelector(".popup__mess").classList.add("bg-success");
                document.querySelector(".popup__mess").classList.remove("bg-danger");
                break;
        }
        document.querySelector(".popup__field").style.visibility = "visible";
        update(Society, Engine);

    })
});

const missionInfoButtons = document.querySelectorAll(".mission__btn-info");
missionInfoButtons.forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector(".popup__mess").style.visibility = "visible";
        document.querySelector(".popup__img").style.visibility = "visible";
        let currentID = parseInt(el.parentNode.parentNode.parentNode.id.slice(4,6));
        document.querySelector(".popup__title").textContent = Engine.getMissionInfo(currentID).name;
        document.querySelector(".popup__img").src = `./img/nasaPhotos/${currentID}.jpg`;
        document.querySelector(".popup__desc").textContent = Engine.getMissionInfo(currentID).description;
        switch(Engine.getMissionStatus(Society, currentID)){
            case 0: document.querySelector(".popup__mess").textContent = Engine.getMissionInfo(currentID).intro; break;
            case 1: document.querySelector(".popup__mess").textContent = Engine.getMissionInfo(currentID).intro; break;
            case 2: document.querySelector(".popup__mess").textContent = Engine.getMissionInfo(currentID).end; break;
        }
        document.querySelector(".popup__mess").classList.remove("bg-danger");
        document.querySelector(".popup__mess").classList.remove("bg-success");
        document.querySelector(".popup__field").style.visibility = "visible";
        update(Society, Engine);
        
    })
});

//Unit controller
const initUnit = () => {
    dataBase.units.forEach((el, id) => {
        let unitid = id + 1;
        document.querySelector("#unit" + unitid).querySelector(".unit__title").textContent = el.name;
        document.querySelector("#unit" + unitid).querySelector(".unit__img").src = `./img/icons/units/${unitid}.png`;
        document.querySelector("#unit" + unitid).querySelector(".unit__qty").textContent = Society.getunitqty(unitid);

        document.querySelector("#unit" + unitid).querySelector(".unit__water").textContent = el.resneed[0][1];
        document.querySelector("#unit" + unitid).querySelector(".unit__energy").textContent = el.resneed[1][1];
        document.querySelector("#unit" + unitid).querySelector(".unit__materials").textContent = el.resneed[2][1];
        document.querySelector("#unit" + unitid).querySelector(".unit__antimatter").textContent = el.resneed[3][1];
        document.querySelector("#unit" + unitid).querySelector(".unit__science").textContent = el.resneed[4][1];
        switch (Engine.getUnitStatus(Society, unitid)) {
            case 0: document.querySelector("#unit"+unitid).classList.add("unit__block");
                    document.querySelector("#unit"+unitid).classList.remove("unit__unblock");
                    break;
            case 1: document.querySelector("#unit"+unitid).classList.remove("unit__block");
                    document.querySelector("#unit"+unitid).classList.add("unit__unblock");
                    break;
        }
    })
}

//Add unit button listener
const unitObtainButtons = document.querySelectorAll(".unit__btn_obtain");
unitObtainButtons.forEach(el => {
    el.addEventListener("click", () => {
        let currentID = parseInt(el.parentNode.parentNode.id.slice(4, 6));
        Engine.Tryaddunits(Society, currentID);
        update(Society, Engine);
    })
})

/*
Society.Addres(1, 100);
Society.Addres(2, 100);
Society.Addres(3, 100);
Society.Addres(4, 100);
Society.Addres(5, 100);
*/


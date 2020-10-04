import {elements} from "./base";
import CharacterStats from "../models/CharacterStats";

const resourcesArr = [[1, elements.globalWater], 
                     [2, elements.globalEnergy], 
                     [3, elements.globalMaterials], 
                     [4, elements.globalAntimatter],
                     [5, elements.globalScience]];

export const updateResource = (resource, count) => {
    resource.textContent = count;
}  
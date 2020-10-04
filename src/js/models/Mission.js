export default class Mission{
    constructor(name, id, description,techneed,unitneed,reward,treward,image,intro,fail,end){
        this.name = name;
        this.id=id;
        this.description = description;
        this.techneed = techneed;
        this.unitneed = unitneed;
        this.reward = reward;
        this.techreward = treward;
        this.image = image;
        this.intro = intro;
        this.fail = fail;
        this.end = end;
    }
}
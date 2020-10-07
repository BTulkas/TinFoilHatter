
// Model to hold arrays of- and return random non-api completions 
export class KeyWord {

    villains:string[];
    goals:string[];
    tech:string[];
    influenced:string[];
    
    
    getRandom(max:number){
        var num = Math.floor(Math.random()*max);
        return num;
    }
    
    getVillains(){
        return this.villains[this.getRandom(this.villains.length)];
    }
    
    getGoals(){
        return this.goals[this.getRandom(this.goals.length)];
    }
    
    getTech(){
        return this.tech[this.getRandom(this.tech.length)];
    }
    
    getInfluenced(){
        return this.influenced[this.getRandom(this.influenced.length)];
    }
    
    
    constructor(
    ){

        this.villains = [
            "aliens",
            "deep state officials",
            "lizard people",
            "rogue AI",
            "vampires",
            "robots",
        ]

        this.goals = [
            "conquer the world",
            "control the world's population",
            "sedate the masses",
            "breed out psychic abilities in ethnic minorities",
        ]

        this.tech = [
            "mind control chips",
            "chemtrails",
            "satanic rituals",
            "black magic",
            "fake news",
            "subliminal messaging",
            "cellphones"
        ]

        this.influenced = [
            "media",
            "news",
            "actors",
            "music",
            "movies"
        ]
    }
}

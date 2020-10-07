import { WikipediaService } from './../../services/wikipedia.service';
import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories.enum';
import { KeyWord } from 'src/app/models/key-word.model';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  rawJson:any;
  theory:string;
  
  constructor(
    private wikiService:WikipediaService
    ) { }
    
  ngOnInit(): void {
    this.getTheory();
  }
  
  // Generates random number
  getRandom(max:number){
    var num = Math.floor(Math.random()*max);
    console.log(num);
    return num;
  }

  
  // Gets random title from a wikipedia category
  async title(category:Categories){
    this.rawJson = await this.wikiService.getTitle(category);
    var title = this.rawJson.query.categorymembers[this.getRandom(this.rawJson.query.categorymembers.length)].title;
    
    // Slices "Category:" from result or converts to lower case where needed
    if(category==Categories.USPresidents || category==Categories.Wars){
      return title.slice(9);
    } else if(category==Categories.Animals){
      return title.toLowerCase();
    }else{
      return title;
    }
  }
    
  async getTheory(){
    
    // KeyWord object for non-api completions.
    var word:KeyWord = new KeyWord();
    
    switch(this.getRandom(8)){
      case 0:
          this.theory = await this.title(Categories.USPresidents) + " is actualy a genetically engineered " + await this.title(Categories.Animals)
          + ", created by agents of the " + await this.title(Categories.SecretSocieties)
          + ". Their reasons are as of yet unkonw, but it is likely a part of their attempt to "+word.getGoals()+".";
        break;
      

      case 1:
          this.theory = "The entire events of the " + await this.title(Categories.Wars) + " were fabricated by " + word.getVillains() +" paid by the "
            + await this.title(Categories.SecretSocieties) + " in an attempt to "+word.getGoals()+".";
        break;
      

      case 2:
          this.theory = await this.title(Categories.SingersSuicide) + " isn't dead, they just went home.";
        break;


      case 3:
        this.theory = await this.title(Categories.AssRulers) + " was murdered because he was about to reveal to the public a plot by the "
          + await this.title(Categories.IntAgencies) + " to " + word.getGoals() + " using " + word.getTech()+".";
        break;

      
      case 4:
        this.theory = "The "+ await  this.title(Categories.IntAgencies) + " is headed exclusively by " + word.getVillains() +". "
          + await this.title(Categories.SingersSuicide) +
          " discovered this and tried to hide messages in songs to inform the public, so a payment was made to the "
          + await this.title(Categories.SecretSocieties) + " to silence the matter.";
        break;


      case 5:
        this.theory = "Using time travel technology reverse-engineered from catpured " + word.getVillains() + ", "
          + await this.title(Categories.USPresidents) + " is using " + word.getTech() + " to subtly manipulate our "
          + word.getInfluenced() +" in an attempt to fight the "
          + await this.title(Categories.SecretSocieties) + " and their attempt to " + word.getGoals()+".";
          break;

      case 6:
        this.theory = await this.title(Categories.USPresidents) + " and " + await this.title(Categories.SingersSuicide)
          + " are actually the same person who was previously hiding as a " + await this.title(Categories.Animals)
          + ", but finally decided it was time to resume the fight against the " + word.getVillains() + " of the "
          + await this.title(Categories.SecretSocieties);
          break;


      case 7:
        this.theory = "Most conspiracy theories are spread by governments to reduce the credibility of any real leaks or guesses.";
        break;

    }

    }

}

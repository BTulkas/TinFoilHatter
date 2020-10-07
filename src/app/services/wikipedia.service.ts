import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  
  title:string;

  constructor(
    private httpClient:HttpClient
  ) { }

  // Returns a category from the wikipedia API
  getTitle(category:string){
    return this.httpClient.get<string>(
      'https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:'+category+'&cmprop=title&cmlimit=max&format=json&origin=*').toPromise();
  }

}

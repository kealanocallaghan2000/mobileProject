import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private httpClient: HttpClient) { }

  //this method is providing a link to the irish sport news stories
  getLatestSportStories(): Observable<any> {
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=b311bbd4155d495fa59093172cdc7084');
  }

  //this method is providing a link to the american sport news stories
  getLatestUsaStories(): Observable<any> {
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b311bbd4155d495fa59093172cdc7084');
  }

  //this method is providing a link to the UK sport news stories
  getLatestUkStories(): Observable<any> {
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=b311bbd4155d495fa59093172cdc7084');
  }
}

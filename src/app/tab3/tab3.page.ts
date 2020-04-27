import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SportService } from '../Services/sport.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page { 
  //variables for the sport stories and inputs from user
  UkSportStories: any = [];
  firstName:string;

  //constructor
  constructor(private storage:Storage, private ukSportService: SportService) {}

  //mehthod to save the users inputted name
  ngOnInit(){
    this.storage.get("inputName").then(
      (data)=>{
        this.firstName = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );

    //method which retrieves the news stories from http client
    this.ukSportService.getLatestUkStories().subscribe(
      (data) => {
        //inside the array in the apis needs to be put in here "articles" in martins example
        this.UkSportStories = data.articles;
      }
    );
 
  }

}

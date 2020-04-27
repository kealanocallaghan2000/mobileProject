import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SportService } from '../Services/sport.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  //variables for the sport stories and inputs from user
  SportStories: any = [];
  inputName: string;
  firstName:string;

  //constructor
  constructor(private storage: Storage, private sportService: SportService) { }

  //mehthod to save the users inputted name
  onSave() {
    console.log(this.inputName);
    this.storage.set("inputName", this.inputName);
  }

  //method which retrieves the news stories from http client
  ngOnInit() {
    this.sportService.getLatestSportStories().subscribe(
      (data) => {
        this.SportStories = data.articles;
      }
    );

    //method which gets the users input name
    this.storage.get("inputName").then(
      (data)=>{
        this.firstName = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  }

  

}

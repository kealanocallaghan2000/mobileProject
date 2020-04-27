import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SportService } from '../Services/sport.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   //variables for the sport stories and inputs from user
  UsaSportStories: any = [];
  firstName:string;
  
  //constructor
  constructor(private storage:Storage, private usaSportService: SportService) {}

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
    this.usaSportService.getLatestUsaStories().subscribe(
      (data) => {
        this.UsaSportStories = data.articles;
      }
    );

  }

}

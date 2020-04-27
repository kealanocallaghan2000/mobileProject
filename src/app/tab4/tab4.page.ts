import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  //name variable
  name: string = "";

  //constructor
  constructor(private storage:Storage, private flashlight: Flashlight) {}

  //method to implement the flashlight
  flashlightMethod(){
    this.flashlight.toggle();
    
  }



}

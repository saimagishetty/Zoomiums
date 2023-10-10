import { Component } from '@angular/core';

@Component({
  selector: 'app-streamline',
  templateUrl: './streamline.component.html',
  styleUrls: ['./streamline.component.scss']
})
export class StreamlineComponent {
  constructor(){

  }

  openPopup = false;
  popup = ()=>{
    console.log("clicked");
      this.openPopup = true;
   }
}

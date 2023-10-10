import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-comp-two',
  templateUrl: './head-comp-two.component.html',
  styleUrls: ['./head-comp-two.component.css']
})
export class HeadCompTwoComponent implements OnInit {

  name : any;
  supname:any;
  subname: any;
  constructor(router: Router) {
    switch(router.url.substring(1)){
      case 'aboutus':{
        this.supname = 'Who are we';
        this.name = 'About Us';
        break;
      }
      case 'contact':{
        this.supname = 'Contact Us';
        this.name = 'Drop us a Line';
        break;
      }
      case 'coaching':{
        this.supname = 'Learn with Us'
        this.name = 'Coaching';
        break;
      }
      case 'work':{
        this.name = 'Work';
        this.subname = '<li>Work Visa - FSTP</li>';
        break;
      }
      case 'postvisa':{
        this.supname = 'Final Steps before Flying';
        this.name = 'Post - Visa';
        break;
      }
      case 'immigrationvisa':{
        this.supname = 'Settle Abroad With Family';
        this.name = 'Immigration Visa';
        break;
      }
      case 'nonimmigrationvisa':{
        this.supname = 'Settle Abroad With Family';
        this.name = 'Non - Immigration Visa';
        break;
      }
    }
  }
  ngOnInit(): void { }

}

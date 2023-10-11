import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  my_value: any;
  constructor(
    private _route: Router,
    private _router: ActivatedRoute,
  ){

  }
  current = 0;
  current1 = 0;
  current2 = 0;
  opendropdown=false;
  @HostListener("window:scroll", [])
  onScroll(): void {
    this.my_value = window.scrollY;
    // console.log(this.my_value)
  }
  dropdown=()=>{
    this.opendropdown = !this.opendropdown;
  }

  opendropbar = false;
  dropbar = ()=>{
      this.opendropbar = !this.opendropbar;
   }
   closeDrop(){
    this.opendropbar = false
    window.scrollTo(0, 0);
   }
   

   
   showMenu = false;

   toggleMenu() {
     this.showMenu = !this.showMenu;
   }

   showPreloader = true;

   ngOnInit() {
    window.scrollTo(0, 0);
      this.navigationElement()
      this._route.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.navigationElement()
        }
      });
     setTimeout(() => {
       this.showPreloader = false;
     }, 1000);
   }
   navigationElement(){
    if (this._route.url.slice(1,14) === "" ){
      this.current = 0;
      this.current1 = 0;
      this.current2 = 0;
      console.log("home",this.current)
    }
    if (this._route.url.slice(1,14) === "aboutus" ){
      this.current = 1;
      this.current1 = 0;
      this.current2 = 0;
      console.log(this.current)
    }
    else if (this._route.url.slice(1,14) === "products/ims"){
      this.current = 3;
      this.current1 = 0;
      this.current2 = 1;
      console.log(this.current)
    }
    else if (this._route.url.slice(1,14) === "products/hrms"){
      this.current = 3;
      this.current1 = 0;
      this.current2 = 2;
      console.log(this.current)
    }
    else if (this._route.url.slice(1,14) === "products/crm"){
      this.current = 3;
      this.current1 = 0;
      this.current2 = 3;
      console.log(this.current)
    }
    else if (this._route.url.slice(1,14) === "products/cor-"){
      this.current = 3;
      this.current1 = 0;
      this.current2 = 4;
      console.log(this.current)
    }     
    else if (this._route.url.slice(1,14) === "clients"){
      this.current = 4;
      this.current1 = 0;
      this.current2 = 0;
      console.log(this.current)
    }
    else if (this._route.url.slice(1,14) === "contact"){
      this.current = 5;
      this.current1 = 0;
      this.current2 = 0;
      console.log(this.current)
    }
    else if (this._route.url.slice(1,14) === "services"){
      this.current = 2;
      this.current1 = 1;
      this.current2 = 0;
      console.log(this.current)
    }
    else if (this._route.url.slice(1,14) === "staffing"){
      this.current = 2;
      this.current1 = 2;
      this.current2 = 0;
      console.log(this.current)
    }
    console.log(this._route.url.slice(1,14)) 
   }
   openTop(){
    this.ngOnInit()
   }
}

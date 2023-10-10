import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.scss']
})


export class TestimonalsComponent {

  // getdistance(){
  //   //left = x
  //   const x = document.getElementById("division").getBoundingClientRect().left;
  //   // right = y
  //   const y = document.getElementById("division").getBoundingClientRect().right;
  // }
  // @ViewChild('conScreen', { read: ElementRef, static: false })
  // elementView!: ElementRef;
  // viewHeight: any;
  // viewWidth: any;

  // ngAfterViewInit(){
  //   if(this.elementView != undefined)
  //   {
  //     this.elementView = this.elementView.nativeElement.offsetLeft;
  //     this.elementView.nativeElement.style.maxHeight = (window.innerHeight - this.elementView - 30) + "px";
  //   } 
  //   else{
  //     console.log("No Detection");
  //   }
  // }

}

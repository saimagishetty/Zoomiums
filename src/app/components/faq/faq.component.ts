import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  constructor(
    private elementRef : ElementRef
  ){
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    let getAllAcordians = this.elementRef.nativeElement.getElementsByClassName('cor-fc-child-question');
    for(  let a of getAllAcordians){
      a.addEventListener('click',()=>{
        let ans = a.nextElementSibling;
        let sign = a.getElementsByClassName('icon')[0];
        if (ans.style.display === "block") {
          ans.style.display = "none";
        } else {
          ans.style.display = "block";
        }
        if(sign.innerText == '+'){
          sign.innerText = '-'
        }else{
          sign.innerText = '+'
        }
      })
    }
  }
}

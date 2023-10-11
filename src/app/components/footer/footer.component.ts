import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  year: any;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
  openFaq() {
    // window.scrollTo(0, 1880);
    this._router.navigate(['aboutus'], { relativeTo: this._route });
    console.log("enter")
    window.scroll({
      top: 1880,
      left: 0,
      behavior: 'smooth'
    });
    console.log(window.top)

  }
  openTop() {
    window.scrollTo(0, 0);
  }

}

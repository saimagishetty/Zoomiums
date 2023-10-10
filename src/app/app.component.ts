import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cor-web-site';
  showPreloader = true;

  ngOnInit() {
    setTimeout(() => {
      this.showPreloader = false;
    }, 1000);
  }

}

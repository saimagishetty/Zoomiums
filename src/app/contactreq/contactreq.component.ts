import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactreq',
  templateUrl: './contactreq.component.html',
  styleUrls: ['./contactreq.component.scss']
})
export class ContactreqComponent {
  submitForm(form: NgForm) {
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
  }

}

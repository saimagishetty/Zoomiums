import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  userDetails = {
    user_name : '',
    user_email: '',
    user_subject : '',
    user_comment : ''
  }
  ngOnInit() {
    // window.scrollTo(0, 0);
   }
   submitForm(form: NgForm) {
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
  }
}

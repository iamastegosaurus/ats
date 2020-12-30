import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import './smtp.js';

declare let Email: any;

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent {

  constructor(private router: Router) { }

  onSubmit(f: NgForm): void {

    const serviceType = (document.getElementById('service-type-dropdown') as HTMLInputElement).value;
    const firstName = (document.getElementById('first-name') as HTMLInputElement).value;
    const lastName = (document.getElementById('last-name') as HTMLInputElement).value;

    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    const address = (document.getElementById('address') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const state = (document.getElementById('state') as HTMLInputElement).value;
    const zip = (document.getElementById('zip') as HTMLInputElement).value;

    const message = (document.getElementById('message') as HTMLInputElement).value;

    const formattedAddress = serviceType + ' requested at address: <br>' + address + ', ' + city + ', ' + state + ', ' + zip + '<br>';
    const formattedName = 'For: ' + firstName + ' ' + lastName + '<br>';
    const formattedContact = 'Phone number: ' + phone + '<br>Email address: ' + email + '<br>';
    const body = '<html>' + formattedAddress + formattedName + formattedContact + '"' + message + '"' + '<html>';

    Email.send({
      SecureToken: 'de42f606-f4ee-4eee-bd61-fddc4f10e025',
      To : 'sean.ats@outlook.com',
      From : 'ats.notify@gmail.com',
      Subject : 'ats-notify: ' + serviceType + ' requested',
      Body : body
      });
    console.log('submitted');

    this.router.navigate(['/submitted']);
  }

}

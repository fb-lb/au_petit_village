import { Component, OnInit } from '@angular/core';
import { FormControl, TouchedChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  lastName = new FormControl('app-contact');

  ngOnInit() {
    this.lastName.events.subscribe((event) => {
      if (event instanceof TouchedChangeEvent) {
        console.log("coucoo");
      }
    });
  }

}

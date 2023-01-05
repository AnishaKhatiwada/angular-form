import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loginForm = new FormControl();
name:string;
  address = [];
 
  constructor() {}
  ngOnInit() {
    this.name = 'Template driven form';
  }
}

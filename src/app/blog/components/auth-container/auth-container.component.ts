import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.css']
})
export class AuthContainerComponent implements OnInit {

  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
